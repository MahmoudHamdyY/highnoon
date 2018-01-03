from urllib.request import urlopen
from html.parser import HTMLParser
from linkfinder import *
from general import *
from queue import Queue
from p_finder import *
import urllib.request
import urllib.parse
import re
import traceback

cnt=1

class Spider:
    base_url = ''
    domain_name =''

    def __init__(self, base_url, domain_name,ready_queue,not_ready_queue):
        self.base_url = base_url
        self.domain_name = domain_name
        while True:
            if ready_queue.empty() == False:
                self.gather_links(ready_queue.get(False), ready_queue,not_ready_queue)


    def gather_links(self,page_url, ready_queue,not_ready_queue):
        html_string = ''
        response = ''
        html_bytes = ''

        try:
            response = urlopen(page_url)
            html_bytes = response.read()
            html_string = html_bytes.decode("utf-8")
            base_url = re.findall(r'((https?://)?([^/#?]+)).*', page_url)[0][0]
            print(base_url)
            finder = Linkfinder(base_url, page_url)
            finder.feed(html_string)

            while(finder.links.empty()==False):
                not_ready_queue.put(finder.links.get(False))

            parag = re.findall(r'<p>(.*?)</p>', html_string)
            st= re.findall(r'<title>(.*?)</title>', html_string)
            paragraph = ""
            title=st[0]
            for pp in parag:
                paragraph+=re.sub('<.*?>', "", pp)

            global cnt
            t = threading.Thread(target = Spider.write_data, args=(page_url, paragraph, title, cnt),)
            cnt = cnt+1
            t.start()
        except Exception as e:
            print(e)

    def write_data(link,text,title,cnt):
        name=str(cnt)+".txt"
        name="folder1/"+name
        f = open(name,'w')
        out=str(link)+"\n"+str(title)+"\n"+str(text)
        f.write(out)
        return

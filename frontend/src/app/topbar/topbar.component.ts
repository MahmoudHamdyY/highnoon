import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Result } from '../result'
import { SearchComponent } from '../search/search.component'

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  @Output()
  searched: EventEmitter<string> = new EventEmitter();
  @ViewChild( SearchComponent ) searchComponent: SearchComponent;


  constructor() { }

  ngOnInit() {
  }

  putQuery(query: string) {
    this.searchComponent.putQuery(query)
  }

  handleSearch($event) {
    console.log("Starting search")
    this.searched.emit($event)
  }
}

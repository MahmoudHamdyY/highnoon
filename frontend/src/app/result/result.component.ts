import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Result } from '../result'
import { ResultDetailsComponent } from '../result-details/result-details.component'
import { Location } from '@angular/common'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() result : Result
  constructor(private location: Location) { }
  ngOnInit() {
  }
  @ViewChild( ResultDetailsComponent ) alert: ResultDetailsComponent;

  mouseEnter(){
     console.log("mouse enter : " + this.result.title);
    this.alert.result = this.result;

  }
  mouseLeave(){
    console.log('mouse leave :' + this.result.title);
    this.alert.result = null ;
  }

  mouseClick(){
    window.location.href = this.result.url
  }
}

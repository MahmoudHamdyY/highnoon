import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../result'
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() results : Result []
  constructor() { }

  ngOnInit() {
  }

  changeResults(results: Result[]) {
    this.results = results
  }

}

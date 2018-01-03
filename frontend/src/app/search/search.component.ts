import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SearchService } from '../search.service'
import { Result } from '../result'
import { Observable } from 'rxjs/Observable'

const randomHints = [
  "It's high noon somewhere in the world",
  "Watch and learn",
  "Reach for the sky",
  "You done?",
  "That'll do fine",
  "This life's never uneventful"
]

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output()
  searched: EventEmitter<string> = new EventEmitter();

  searchForm = this.fb.group({
    text: [""]
  });

  randomHint: string;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.randomHint = randomHints[Math.floor(Math.random() * randomHints.length)];
  }

  search($event) {
    var query = this.searchForm.controls.text.value;
    this.searched.emit(query)
    console.log(`Searching for: ${query}`)
  }

  putQuery(query: string) {
    this.searchForm.controls.text.setValue(query)
  }
}

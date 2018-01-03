import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../search.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(
    private router: Router,
    private searchService: SearchService) { }

  ngOnInit() {
  }

  handleSearch($event) {
    console.log("Starting search")
    this.router.navigate(['/search'], { queryParams: { q: $event } })
  }

  private handleResult(results) {
    console.log(results)
  }
}

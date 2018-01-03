import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { Result } from '../result'
import { ResultsComponent } from '../results/results.component'
import { Observable } from 'rxjs/Observable'
import { SearchService } from '../search.service'
import { TopbarComponent } from '../topbar/topbar.component'

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {
  @ViewChild( ResultsComponent ) resultsComponent: ResultsComponent;
  @ViewChild( TopbarComponent ) topbarComponent: TopbarComponent;

  constructor(private searchService: SearchService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) {
  }

  ngOnInit() {
	}

  ngAfterViewInit() {
    this.route
      .queryParams
      .subscribe(params => {
        this.handleSearch(params['q']);
      });
  }

  handleSearch($event) {
    if($event == null) {
      this.router.navigate(['/'])
    } else {
      this.location.go("/search?q=" + $event)
    }
    this.topbarComponent.putQuery($event)
    this.searchService.searchFor($event).subscribe(results => this.handleResults(results))
    this.resultsComponent.changeResults([])
  }

  handleResults(results: Result[]) {
    this.resultsComponent.changeResults(results)
  }

}

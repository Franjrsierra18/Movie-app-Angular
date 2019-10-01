import { Component, OnInit } from '@angular/core';
import { SearchTvService } from 'src/app/services/search-tv.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-results-tv',
  templateUrl: './search-results-tv.component.html',
  styleUrls: ['./search-results-tv.component.scss']
})
export class SearchResultsTvComponent implements OnInit {
  public series: object[];
  public query: string = '';
  public loading: any;
  public paramsSubscription: Subscription;
  constructor(public searchTvService: SearchTvService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSubscription = this.route.paramMap.subscribe(params => {
      this.getSearchSeries(params.get('query'))
    })
  }
  getSearchSeries(query: string) {
    this.loading = true;
    this.searchTvService.getSearchSeries(query).subscribe(
      res => {
        this.series = res['results'];
        this.loading = false;
      }
    )
  }
}

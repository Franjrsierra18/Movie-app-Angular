import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  public peliculas: object[];
  public query: string = '';
  loading = false;
  public paramsSubscription: Subscription;
  constructor(
    public searchService: SearchService,
    public route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.paramsSubscription = this.route.paramMap.subscribe(params => {
      this.getSearchMovies(params.get('query'));
    });
  }
  getSearchMovies(query: string) {
    this.searchService.getSearchMovies(query).subscribe(res => {
      this.peliculas = res['results'];
    });
  }
  paginationPrevious() {}
  paginationNext(){}
}

import { Component, OnInit } from '@angular/core';
import { SearchPeopleService } from 'src/app/services/search-people.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-results-people',
  templateUrl: './search-results-people.component.html',
  styleUrls: ['./search-results-people.component.scss']
})
export class SearchResultsPeopleComponent implements OnInit {
  public peoples: any;
  public query:string = '';
  public loading: any;
  public paramsSubscription: Subscription;
  constructor(public searchPeopleService: SearchPeopleService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSubscription = this.route.paramMap.subscribe(params => {
       this.getSearchPeople(params.get('query'))
    })
  }
  getSearchPeople(query: string) {
    console.log(query)
    this.loading = true;
    this.searchPeopleService.getSearchPeople(query).subscribe(
      res => {
        this.peoples = res['results'];
        this.loading = false;
      }
    )
  }
}

import { Component, OnInit, EventEmitter } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  // @output() getSearch():any = EventEmitter;
  public all: object[];
  public paramsSubscription: Subscription;
  query = '';
  constructor(public searchService: SearchService,
    public route: ActivatedRoute, private router: Router) { }

  ngOnInit() {//inicia el component
    this.paramsSubscription = this.route.paramMap.subscribe(paramsMap => {//nos suscribimos a cambios en los parámetros de la url ej: /movie/movies o /movie/upcoming

      this.getSearch(this.query)//upcoming o /movies
    })
  }

  onEnter(query: string) {
    this.query = query;
    this.getSearch(this.query)
  }
  goToPage(pagename: string) {
    this.router.navigate([pagename])
  }
  getSearch(query: string) {
    this.searchService.getSearch(this.query).subscribe(
      res => {
        this.all = res['results'];
        this.goToPage('/search/results')
        this.query = '';
      }
    )
  }

}

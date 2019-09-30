import { Component, OnInit, OnDestroy } from '@angular/core';
import { TvService } from 'src/app/services/tv.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tv-popular',
  templateUrl: './tv-popular.component.html',
  styleUrls: ['./tv-popular.component.scss']
})
export class TvPopularComponent implements OnInit, OnDestroy {
  public series: object[];
  public genres: object[];
  public page: number = 1;
  public loading: any;
  public paramsSubscription: Subscription;
  constructor(public tvService: TvService,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSubscription = this.route.paramMap.subscribe(paramsMap => {//nos suscribimos a cambios en los parámetros de la url ej: /movie/movies o /movie/upcoming

      this.getSeries(paramsMap['params']['category'])//upcoming o /movies
    })
    this.getGenres()
  }
  getSeries(category) {
    this.loading = true;
    this.tvService.getSeries(category, 'es-ES', String(this.page)).subscribe(
      res => {
        this.series = res['results'];
        this.loading = false;
      },
      error => console.log(error))
  }
  paginationNext() {
    this.page = ++this.page;
    this.getSeries('popular')
  }
  paginationPrevious() {
      this.page = --this.page;
      this.getSeries('popular')
  }
  getGenres() {
    this.loading = true;
    this.tvService.getGenres().subscribe(
      res => {
        this.genres = res['genres'];
        this.loading = false;
      },
      error => console.log(error))
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe()
    console.log(this.paramsSubscription);
  }
}

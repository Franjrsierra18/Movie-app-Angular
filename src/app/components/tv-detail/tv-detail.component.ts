import { Component, OnInit } from '@angular/core';
import { TvService } from 'src/app/services/tv.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tv-detail',
  templateUrl: './tv-detail.component.html',
  styleUrls: ['./tv-detail.component.scss']
})
export class TvDetailComponent implements OnInit {
  public serie: object;
  public loading: any;
  public paramsSubscription: Subscription;
  constructor(public tvService: TvService,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSubscription = this.route.paramMap.subscribe(paramsMap => {//nos suscribimos a cambios en los parámetros de la url ej: /movie/movies o /movie/upcoming

      this.getSeriesId(paramsMap['params']['id'])//upcoming o /movies
    })
  }
  getSeriesId(id) {
    this.loading = true;
    this.tvService.getSeriesId(id).subscribe(
      res => {
        this.serie = res;
        this.loading = false;
      },
      error => console.log(error))
  }
}

import { Component, OnInit } from '@angular/core';
import { TvService } from 'src/app/services/tv.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { log } from 'util';


@Component({
  selector: 'app-tv-detail',
  templateUrl: './tv-detail.component.html',
  styleUrls: ['./tv-detail.component.scss']
})
export class TvDetailComponent implements OnInit {
  public serie: any;
  public loading: any;
  public paramsSubscription: Subscription;
  constructor(public tvService: TvService,
    public route: ActivatedRoute) { }

  ngOnInit() {
    console.log('====================================');
    console.log('ngoninit');
    console.log('====================================');
    this.paramsSubscription = this.route.paramMap.subscribe(paramsMap => {//nos suscribimos a cambios en los parámetros de la url ej: /movie/movies o /movie/upcoming

      this.getSeriesId(paramsMap['params']['id'])//upcoming o /movies
    })
  }
  getSeriesId(id) {
    this.loading = true;
    console.log('====================================');
    console.log('getseriesid');
    console.log('====================================');
    this.tvService.getSeriesId(id).subscribe(
      res => {
        console.log('====================================');
        console.log(res);
        console.log('====================================');
        this.serie = res;
        this.loading = false;
      },
      error => console.log(error))
  }
}

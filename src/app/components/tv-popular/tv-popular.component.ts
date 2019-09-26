import { Component, OnInit, OnDestroy } from '@angular/core';
import { TvService } from 'src/app/services/tv.service';
import { ActivatedRoute } from '@angular/router';
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-tv-popular',
  templateUrl: './tv-popular.component.html',
  styleUrls: ['./tv-popular.component.scss']
})
export class TvPopularComponent implements OnInit,OnDestroy {
  public series: object[];
  public page: number = 0;
  public paramsSubscription:Subscription;
  constructor(public tvService: TvService,
    public route: ActivatedRoute) { }

  ngOnInit() {
    console.log('tv')
    this.paramsSubscription=this.route.paramMap.subscribe(paramsMap=>{//nos suscribimos a cambios en los parámetros de la url ej: /movie/movies o /movie/upcoming
      
      this.getSeries(paramsMap['params']['category'])//upcoming o /movies
    })
  }
  getSeries(category){
    this.tvService.getSeries(category, 'es-ES', '1').subscribe(
      res => this.series = res['results'],
      error => console.log(error))
  }
  ngOnDestroy(){
    this.paramsSubscription.unsubscribe()
    console.log(this.paramsSubscription);
  }
}

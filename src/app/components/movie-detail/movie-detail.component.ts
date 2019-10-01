import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  public movie: any;
  public loading:any;
  public paramsSubscription:Subscription;
  constructor(public movieService: MovieService,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSubscription=this.route.paramMap.subscribe(paramsMap=>{//nos suscribimos a cambios en los parámetros de la url ej: /movie/movies o /movie/upcoming

      this.getMoviesId(paramsMap['params']['id'])//upcoming o /movies
    })
  }
  getMoviesId(id){
    this.loading = true;
    this.movieService.getMoviesId(id).subscribe(
      res => {
        this.movie = res;
        this.loading = false;
      },
      error => console.log(error))
  }
}

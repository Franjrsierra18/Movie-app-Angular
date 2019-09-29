import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  public movies: object[];
  public genres: object[];
  public loading: any;
  public page: number = 1;
  public paramsSubscription: Subscription;
  constructor(public movieService: MovieService,
    public route: ActivatedRoute) { }//inyectamos el servicio MovieService en el componente moviesComponent

  ngOnInit() {//inicia el component
    this.paramsSubscription = this.route.paramMap.subscribe(paramsMap => {//nos suscribimos a cambios en los parámetros de la url ej: /movie/movies o /movie/upcoming

      this.getMovies(paramsMap['params']['category'])//upcoming o /movies
    })
    this.getGenres()
  }
  getMovies(category) {
    this.loading = true;
    this.movieService.getMovies(category, 'es-ES', this.page).subscribe(
      res => {
        this.movies = res['results'];
        this.loading = false;
      },
      error => console.log(error))
  }
  pagination() {
    this.page = ++this.page;
    this.getMovies('popular')
  }
  getGenres() {
    this.loading = true;
    this.movieService.getGenres().subscribe(
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

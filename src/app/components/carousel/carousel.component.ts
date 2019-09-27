import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  public movies: object[];
  itemsPerSlide = 8;
  singleSlideOffset = true;

  slides = [
    { image: 'https://i.pinimg.com/originals/ff/a1/09/ffa1096433f14975a629e67880ded7e7.jpg' }
  ];
  constructor(public movieService: MovieService,
    public route: ActivatedRoute) { }

  ngOnInit() {//inicia el component
    this.getMovies()
  }
  getMovies(){
    this.movieService.getMovies('popular', 'es-ES', '1').subscribe(
      res => {
        this.movies = res['results'];
      },
      error => console.log(error))
  }
}


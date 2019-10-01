import { Component, OnInit } from '@angular/core';
import { TvService } from 'src/app/services/tv.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carousel-tv',
  templateUrl: './carousel-tv.component.html',
  styleUrls: ['./carousel-tv.component.scss']
})
export class CarouselTvComponent implements OnInit {
  public series: object[];
  public loading: any;
  // itemsPerSlide = 7;
  singleSlideOffset = true;

  slides = [
    { image: 'https://i.pinimg.com/originals/ff/a1/09/ffa1096433f14975a629e67880ded7e7.jpg' }
  ];

  constructor(public tvService: TvService,
    public route: ActivatedRoute) { }

  ngOnInit() {//inicia el component
    this.getSeries()
  }
  getSeries() {
    this.loading = true;
    this.tvService.getSeries('airing_today', 'es-ES', '1').subscribe(
      res => {
        this.series = res['results'];
        this.loading = false;
      },
      error => console.log(error))
  }
}

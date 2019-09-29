import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carousel-people',
  templateUrl: './carousel-people.component.html',
  styleUrls: ['./carousel-people.component.scss']
})
export class CarouselPeopleComponent implements OnInit {
  public peoples: object[];
  singleSlideOffset = true;
  slides = [
    { image: 'https://i.pinimg.com/originals/ff/a1/09/ffa1096433f14975a629e67880ded7e7.jpg' }
  ];
  constructor(public peopleService: PeopleService,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.getPeople()
  }
  getPeople(){
    this.peopleService.getPeople().subscribe(
      res => {
        this.peoples = res['results'];
      },
      error => console.log(error))
  }
}

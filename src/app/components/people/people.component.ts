import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  public peoples: object[];
  public loading: any;
  public page: number = 1;
  public paramsSubscription: Subscription;
  constructor(public peopleService: PeopleService,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSubscription = this.route.paramMap.subscribe(paramsMap => {//nos suscribimos a cambios en los parámetros de la url ej: /movie/movies o /movie/upcoming

      this.getPeople()//upcoming o /movies
    })
  }
  getPeople() {
    this.loading = true;
    this.peopleService.getPeople(this.page).subscribe(
      res => {
        this.peoples = res['results'];
        this.loading = false;
      },
      error => console.log(error))
  }
  paginationNext() {
    this.page = ++this.page;
    this.getPeople()
  }
  paginationPrevious() {
    if (this.page === 1) {
      document.querySelector('.previous').className = 'disabled';
    } else {
      this.page = --this.page;
      this.getPeople()
    }
  }
}

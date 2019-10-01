import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar-people',
  templateUrl: './search-bar-people.component.html',
  styleUrls: ['./search-bar-people.component.scss']
})
export class SearchBarPeopleComponent {

  constructor(private router: Router) { }

  onEnter(query) {
    this.router.navigate(['/search/person/' + query])
  }
}
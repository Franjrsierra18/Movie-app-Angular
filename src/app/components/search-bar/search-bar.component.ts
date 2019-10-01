import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent{

  constructor(private router: Router) { }

  onEnter(query) {
    this.router.navigate(['/search/movie/' + query])
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar-tv',
  templateUrl: './search-bar-tv.component.html',
  styleUrls: ['./search-bar-tv.component.scss']
})
export class SearchBarTvComponent {

  constructor(private router: Router) { }

  onEnter(query) {
    this.router.navigate(['/search/tv/' + query])
  }
}

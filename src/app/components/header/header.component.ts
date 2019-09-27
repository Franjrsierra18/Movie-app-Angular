import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  public responsiveNav:boolean=false;
  ngOnInit() {
  }
  toggleNavigationClass(){
    this.responsiveNav=!this.responsiveNav
  }
}

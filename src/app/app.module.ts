import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { TvPopularComponent } from './components/tv-popular/tv-popular.component';
import { LoadingComponent } from './components/loading/loading.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselTvComponent } from './components/carousel-tv/carousel-tv.component';
import { MainComponent } from './components/main/main.component';
import { TvDetailComponent } from './components/tv-detail/tv-detail.component';
import { CarouselPeopleComponent } from './components/carousel-people/carousel-people.component';
import { PeopleComponent } from './components/people/people.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MovieDetailComponent,
    TvPopularComponent,
    LoadingComponent,
    CarouselComponent,
    FooterComponent,
    SearchBarComponent,
    CarouselTvComponent,
    MainComponent,
    TvDetailComponent,
    CarouselPeopleComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

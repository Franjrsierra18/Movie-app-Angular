import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { TvPopularComponent } from './components/tv-popular/tv-popular.component';
import { MainComponent } from './components/main/main.component';
import { PeopleComponent } from './components/people/people.component';
import { TvDetailComponent } from './components/tv-detail/tv-detail.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchResultsPeopleComponent } from './components/search-results-people/search-results-people.component';
import { SearchResultsTvComponent } from './components/search-results-tv/search-results-tv.component';


const routes: Routes = [
  { path: '', component: MainComponent, pathMatch:'full'},
  { path: 'serie/:id', component: TvDetailComponent },
  { path: 'tv/:category', component: TvPopularComponent },
  { path: 'movies/:category', component: MoviesComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'person/popular', component: PeopleComponent },
  { path: 'person/:id', component: PeopleComponent },
  { path: 'search/movie/:query', component: SearchResultsComponent },
  { path: 'search/tv/:query', component: SearchResultsTvComponent },
  { path: 'search/person/:query', component: SearchResultsPeopleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

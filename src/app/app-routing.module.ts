import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { TvPopularComponent } from './components/tv-popular/tv-popular.component';
import { MainComponent } from './components/main/main.component';
import { PeopleComponent } from './components/people/people.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'tv/:category', component: TvPopularComponent },
  { path: 'movies/:category', component: MoviesComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'people/popular', component: PeopleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

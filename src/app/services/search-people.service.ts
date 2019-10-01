import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchPeopleService {

  constructor(public http:HttpClient) { }

  getSearchPeople(query:string):Observable<object>{
    return this.http.get(`https://api.themoviedb.org/3/search/person?api_key=09e6cf9871795d48bba7c9be1465ff3e&language=en-US&query=${query}&page=1&include_adult=false`);
  }
}

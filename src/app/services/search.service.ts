import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(public http:HttpClient) { 
  }
  getSearch(query:string = ""):Observable<object>{
    return this.http.get(`https://api.themoviedb.org/3/search/multi?api_key=09e6cf9871795d48bba7c9be1465ff3e&language=en-US&query=${query}`);
  }
}

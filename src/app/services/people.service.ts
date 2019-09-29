import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor(public http: HttpClient) { }

  getPeople(page:number): Observable<object> {//creamos tantos métodos como necesitemos para traer la información que requieren nuestros componentes
    return this.http.get(`https://api.themoviedb.org/3/person/popular?api_key=09e6cf9871795d48bba7c9be1465ff3e&language=en-US&${String(page)}`)
  }
  getPeopleId(id:string):Observable<object>{//creamos tantos métodos como necesitemos para traer la información que requieren nuestros componentes
    return this.http.get(`https://api.themoviedb.org/3/person/${id}?api_key=09e6cf9871795d48bba7c9be1465ff3e&language=en-US`);
  }
}

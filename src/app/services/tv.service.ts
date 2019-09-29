import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvService {
  constructor(public http:HttpClient) {  }

  getSeries(category:string,language:string,page:string):Observable<object>{//creamos tantos métodos como necesitemos para traer la información que requieren nuestros componentes
    return this.http.get(`https://api.themoviedb.org/3/tv/${category}?api_key=09e6cf9871795d48bba7c9be1465ff3e&language=${language}&page=${page}`)
  }
  getSeriesId(id:string):Observable<object>{//creamos tantos métodos como necesitemos para traer la información que requieren nuestros componentes
    return this.http.get(`https://api.themoviedb.org/3/tv/${id}?api_key=09e6cf9871795d48bba7c9be1465ff3e&language=en-US
    `);
  }
  getGenres():Observable<object>{
    return this.http.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=09e6cf9871795d48bba7c9be1465ff3e&language=en-US`);
  }
}
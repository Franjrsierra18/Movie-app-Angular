 import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movies: any, searchText: string): any[] {
    if(!movies) return [];
    if(!searchText) return movies;

    searchText = searchText.toLowerCase();

    return movies.filter( x => {
      return x.toLowerCase().includes(searchText);
    });
  }
}

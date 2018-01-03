import { Injectable } from '@angular/core';
import { Result } from './result'
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class SearchService {
  baseUrl = "http://localhost:8080"
  searchUrl = "/search"

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }

  private formUrl(query: string): string {
    return `${this.baseUrl}${this.searchUrl}?q=${query}`
  }

  searchFor(query: string): Observable<Result[]> {
    return this.http.get<Result[]>(this.formUrl(query)).pipe(
      tap(results => console.log(results)),
      catchError(this.handleError<Result[]>('search', []))
    )
  }
}

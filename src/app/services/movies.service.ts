import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getByName(name: string): Observable<APIResponse> {
    return this.http.get<APIResponse>(
      'https://api.themoviedb.org/3/search/movie',
      {
        params: new HttpParams({ fromObject: { language: 'en-US' } }).append(
          'query',
          name,
        ),
      },
    );
  }
}

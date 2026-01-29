import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, Observable, retry, throwError } from 'rxjs';
import { APIResponse } from '../models/movie';
import { GlobalErrorService } from './global-error.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(
    private http: HttpClient,
    private errorService: GlobalErrorService,
  ) {}

  getByName(name: string): Observable<APIResponse> {
    return this.http
      .get<APIResponse>('https://api.themoviedb.org/3/search/movie', {
        params: new HttpParams({ fromObject: { language: 'en-US' } }).append(
          'query',
          name,
        ),
      })
      .pipe(delay(2000), retry(2), catchError(this.handleError.bind(this)));
  }

  private handleError(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}

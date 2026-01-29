import { AsyncPipe, UpperCasePipe } from '@angular/common';
import { Component, effect, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { MovieComponent } from './components/movie/movie.component';
import { movies as data } from './data/movies';
import { APIResponse } from './models/movie';
import { MoviesService } from './services/movies.service';
import { ErrorMessage } from './components/error-message/error-message.component';
import { MovieInfo } from './components/movie-info/movie-info.component';

@Component({
  selector: 'app-root',
  imports: [
    AsyncPipe,
    MovieComponent,
    RouterOutlet,
    UpperCasePipe,
    ErrorMessage,
    FormsModule,
    MovieInfo
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'angular-tmdb';
  movies$: Observable<APIResponse>;
  loading = false;
  query = model('mission impossible');

  constructor(private moviesService: MoviesService) {
    effect(() => this.fetchMovies(this.query()));
  }

  fetchMovies(name: string) {
    this.loading = true;
    this.movies$ = this.moviesService
      .getByName(name)
      .pipe(tap(() => (this.loading = false)));
  }

  // ngOnInit(): void {
  //   this.fetchMovies('mission impossible')
  // }
}

import { AsyncPipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieComponent } from './components/movie/movie.component';
import { movies as data } from './data/movies';
import { APIResponse } from './models/movie';
import { MoviesService } from './services/movies.service';
import { ErrorMessage } from "./components/error-message/error-message.component";

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, MovieComponent, RouterOutlet, UpperCasePipe, ErrorMessage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected title = 'angular-tmdb';
  movies$: Observable<APIResponse>;
  loading = false;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.loading = true;
    this.movies$ = this.moviesService.getByName('mission impossible');
    this.loading = false;
  }
}

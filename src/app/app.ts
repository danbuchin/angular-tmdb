import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { movies as data } from './data/movies';
import { APIResponse, IMovie } from './models/movie';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  imports: [MovieComponent, RouterOutlet, UpperCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected title = 'angular-tmdb';
  movies: IMovie[] = data;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService
      .getByName('mission impossible')
      .subscribe((movielist) => (this.movies = movielist.results));
  }
}

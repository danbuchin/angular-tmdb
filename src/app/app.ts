import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { movies as data } from './data/movies';
import { IMovie } from './models/movie';

@Component({
  selector: 'app-root',
  imports: [MovieComponent, RouterOutlet, UpperCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'angular-tmdb';
  movies: IMovie[] = data;
}

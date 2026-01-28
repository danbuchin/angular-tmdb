import { Component, Input } from '@angular/core';
import { IMovie } from '../../models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
})
export class MovieComponent {
  @Input() movie: IMovie;
}

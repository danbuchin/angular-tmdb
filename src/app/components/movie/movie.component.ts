import { Component, Input } from '@angular/core';
import { IMovie } from '../../models/movie';
import { DecimalPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  imports: [DecimalPipe, NgClass],
})
export class MovieComponent {
  @Input() movie: IMovie;

  details = false;
}

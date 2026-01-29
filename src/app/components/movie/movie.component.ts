import { Component, Input } from '@angular/core';
import { IMovie } from '../../models/movie';
import { DecimalPipe, NgClass } from '@angular/common';
import { StringValuesPipe } from '../../pipes/string-values-pipe';
import { SnakeCaseToRegularTextPipe } from '../../pipes/snake-case-to-regular-text-pipe';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  imports: [DecimalPipe, NgClass, StringValuesPipe, SnakeCaseToRegularTextPipe],
})
export class MovieComponent {
  @Input() movie: IMovie;

  details = false;
}

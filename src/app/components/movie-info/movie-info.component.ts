import { Component, Input } from '@angular/core';
import { IMovie } from '../../models/movie';
import { SnakeCaseToRegularTextPipe } from '../../pipes/snake-case-to-regular-text-pipe';
import { StringValuesPipe } from '../../pipes/string-values-pipe';

@Component({
  selector: 'app-movie-info',
  imports: [SnakeCaseToRegularTextPipe, StringValuesPipe],
  templateUrl: './movie-info.component.html',
})
export class MovieInfo {
  @Input() movie: IMovie;
}

import { Pipe, PipeTransform } from '@angular/core';
import { IMovie } from '../models/movie';

@Pipe({
  name: 'stringValues',
})
export class StringValuesPipe implements PipeTransform {
  transform(value: IMovie) {
    return Object.entries(value).filter((entry) =>
      ['string', 'boolean', 'number'].includes(typeof entry[1]),
    );
  }
}

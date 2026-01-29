import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snakeCaseToRegularText',
})
export class SnakeCaseToRegularTextPipe implements PipeTransform {
  transform(value: string): string {
    return value[0].toUpperCase() + value.slice(1).replaceAll('_', ' ');
  }
}

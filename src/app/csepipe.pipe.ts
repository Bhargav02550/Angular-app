import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'csepipe',
  standalone: true,
})
export class CsepipePipe implements PipeTransform {
  cseval: string = '';

  transform(value: any, ...args: any[]): any {
    this.cseval = value.split(' ').reverse().join(' ');
    return this.cseval;
  }
}

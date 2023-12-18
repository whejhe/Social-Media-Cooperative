import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaHora'
})
export class FechaHoraPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtradoDeEstado'
})
export class FiltradoDeEstadoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

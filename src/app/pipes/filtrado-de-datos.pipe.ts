import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtradoDeDatos'
})
export class FiltradoDeDatosPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

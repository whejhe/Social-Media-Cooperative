import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenarListas'
})
export class OrdenarListasPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

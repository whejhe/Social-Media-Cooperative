import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoMonedas'
})
export class FormatoMonedasPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

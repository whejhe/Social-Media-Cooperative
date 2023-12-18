import { NgModule } from '@angular/core';
import { FiltradoDeDatosPipe } from './filtrado-de-datos.pipe';
import { FiltradoDeEstadoPipe } from './filtrado-de-estado.pipe';
import { FechaHoraPipe } from './fecha-hora.pipe';
import { FormatoMonedasPipe } from './formato-monedas.pipe';
import { OrdenarListasPipe } from './ordenar-listas.pipe';

@NgModule({
    declarations: [
        FiltradoDeDatosPipe,
        FiltradoDeEstadoPipe,
        FechaHoraPipe,
        FormatoMonedasPipe,
        OrdenarListasPipe,
    ],
    exports: [
        FiltradoDeDatosPipe,
        FiltradoDeEstadoPipe,
        FechaHoraPipe,
        FormatoMonedasPipe,
        OrdenarListasPipe,
    ]
})
export class PipeModule { }

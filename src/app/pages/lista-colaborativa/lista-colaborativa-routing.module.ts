import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaColaborativaPage } from './lista-colaborativa.page';

const routes: Routes = [
  {
    path: '',
    component: ListaColaborativaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaColaborativaPageRoutingModule {}

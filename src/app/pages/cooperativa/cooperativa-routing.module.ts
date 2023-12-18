import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CooperativaPage } from './cooperativa.page';

const routes: Routes = [
  {
    path: '',
    component: CooperativaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CooperativaPageRoutingModule {}

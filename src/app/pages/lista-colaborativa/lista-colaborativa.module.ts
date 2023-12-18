import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaColaborativaPageRoutingModule } from './lista-colaborativa-routing.module';

import { ListaColaborativaPage } from './lista-colaborativa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaColaborativaPageRoutingModule
  ],
  declarations: [ListaColaborativaPage]
})
export class ListaColaborativaPageModule {}

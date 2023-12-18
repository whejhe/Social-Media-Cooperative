import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CooperativaPageRoutingModule } from './cooperativa-routing.module';

import { CooperativaPage } from './cooperativa.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CooperativaPageRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [CooperativaPage]
})
export class CooperativaPageModule {}

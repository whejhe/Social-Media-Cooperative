import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  CameraPosition,
  MarkerOptions,
  Marker,
} from '@ionic-native/google-maps';

import { IonicModule } from '@ionic/angular';

import { MapaPageRoutingModule } from './mapa-routing.module';

import { MapaPage } from './mapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaPageRoutingModule,
  ],
  providers: [
    
  ],
  declarations: [MapaPage]
})
export class MapaPageModule {}

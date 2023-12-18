import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { PipeModule } from './pipes/pipe.module';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMap } from '@ionic-native/google-maps';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule,
    PipeModule,
  ],
  providers: [
    GoogleMap,
    { provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy, 
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

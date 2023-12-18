import { Component, OnInit } from '@angular/core';
import { GoogleMapsEvent, GoogleMap } from '@ionic-native/google-maps';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

showMap() {
  const mapOptions = {
    camera: {
      target: {
        lat: 37.7749, // Latitud inicial del mapa
        lng: -122.4194 // Longitud inicial del mapa
      },
      zoom: 10 // Nivel de zoom inicial del mapa
    }
  };

  const map = new GoogleMap('map_canvas', mapOptions);

  map.one(GoogleMapsEvent.MAP_READY).then(() => {
    console.log('Map is ready!');
  });

}

}

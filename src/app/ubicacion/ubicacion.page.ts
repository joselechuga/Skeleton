import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@awesome-cordova-plugins/geolocation/ngx';


@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {

  ubicacion;

  constructor( public geolocation: Geolocation) { }

  ngOnInit() {
    this.geolocationNative();
  }


  geolocationNative() {
    this.geolocation.getCurrentPosition().then((geposition: Geoposition)=>{
      console.log(geposition);
      this.ubicacion = geposition;
      console.log('ubicacion',this.ubicacion)
    })
  }
}

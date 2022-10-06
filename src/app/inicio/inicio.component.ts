import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {}

  direccion(){
    this.navCtrl.navigateRoot('/consumo-api'); 
  }

}

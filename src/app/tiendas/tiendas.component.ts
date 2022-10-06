import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.scss'],
})
export class TiendasComponent implements OnInit {
  
  constructor(private loadingCtrl: LoadingController) { }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando productos...',
      duration: 1000,
      spinner: 'circles',
    });

    loading.present();
  }

  conteo(){
    setTimeout(function(){
      console.log('hola')
    },1000);
  }

  ngOnInit() {
    this.conteo();
    this.showLoading();
    
  }

}

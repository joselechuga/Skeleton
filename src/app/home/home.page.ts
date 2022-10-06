import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { HttpClientModule } from '@angular/common/http';
import { GetApiService } from '../catalogo/get-api.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  producto:Array <any>;
  getdata: any[] = [];

  constructor(private http: HttpClient, private router: Router,
    public _services:GetApiService) {
    this.router.navigate(['home/tiendas']);

    this.producto = [
      {"name":"Teclado Logitech",
        "imagen":"logitec.jpg"},
        {
            "name":"Suplemento Gold",
            "imagen":"golstand.jpg"
        },
        {
            "name":"Pack Beyblade",
            "imagen":"logitec.jpg"
        }
    ]
  }
  segmentChanged($event) {
    console.log($event.detail.value);
    let direction = $event.detail.value
    if (direction == 'salir') {
      localStorage.removeItem('ingresado');
      this.router.navigate(['login'])
    }
    else {
      this.router.navigate(['home/' + direction])
    }
  }

  ngOnInit() {

  }

}


/**
 * 
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home', 
  templateUrl: 'home.page.html', 
  styleUrls: ['home.page.scss'], 
})
export class HomePage {
  data: any; 

  constructor(private activeroute: ActivatedRoute,
     private router: Router,
     public navCtrl : NavController) {
   
    this.activeroute.queryParams.subscribe(params => { 
      if (this.router.getCurrentNavigation().extras.state) { 
        this.data = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.data) 
      }else{this.router.navigate(["/login"])} 
    });
  }



  irtienda(){
    this.router.navigate(['/producto'])
  }
}
 */
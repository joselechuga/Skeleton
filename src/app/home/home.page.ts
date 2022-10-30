import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { HttpClientModule } from '@angular/common/http';
import { Geolocation, Geoposition } from '@awesome-cordova-plugins/geolocation/ngx';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ubicacion;

  constructor(private http: HttpClient,
    private router: Router,
    public geolocation: Geolocation,
    public navCtrl:NavController) {

    this.router.navigate(['home']);
  }


  geolocationNative() {
    this.geolocation.getCurrentPosition().then((geposition: Geoposition)=>{
      console.log(geposition);
      this.ubicacion = geposition;
      console.log('ubicacion',this.ubicacion)
    })
  }

  ngOnInit() {
    this.geolocationNative();
  }


  salir(){
    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('/login'); 
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
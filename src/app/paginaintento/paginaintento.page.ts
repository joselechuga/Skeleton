import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-paginaintento',
  templateUrl: './paginaintento.page.html',
  styleUrls: ['./paginaintento.page.scss'],
})
export class PaginaintentoPage implements OnInit {

  user={
    usuario:"",
    password:""
  }

  formularioLogin:FormGroup;

  constructor(private router: Router,public fb:FormBuilder , 
    public alertController:AlertController,
    public navCtrl: NavController) {   this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    }) }

  ngOnInit() {
  }
  async ingresar(){
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('Ingresado');
      localStorage.setItem('ingresado','true');
      let navigationExtras: NavigationExtras = {
      state: {
        user: this.user 
      }
    };
    this.navCtrl.navigateRoot('/home'); 

    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos!',
        message: 'Usuario y/o contraseña incorrectos',
        buttons: ['Aceptar'],
      });
      await alert.present();
      return;
      
    }

    }
}

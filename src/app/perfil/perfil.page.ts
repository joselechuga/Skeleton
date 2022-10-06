import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { createAnimation, NavController } from '@ionic/angular';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  data: any;

  //se declara una variable que obtiene los datos del registro y lo podemos trabajar como una lista
  usuario = JSON.parse(localStorage.getItem('usuario'));

  constructor(public navCtrl:NavController,private activeroute: ActivatedRoute,
    private router: Router,) { 

      this.activeroute.queryParams.subscribe(params => { 
        if (this.router.getCurrentNavigation().extras.state) { 
          this.data = this.router.getCurrentNavigation().extras.state.user;
          console.log(this.data) 
        }else{this.router.navigate(["perfil"])} 
      });
  }
  

//   mostrar(){
//     var usuario = JSON.parse(localStorage.getItem('usuario'));

//     let datosUsuario = [{}];

//     for(var user in usuario){
//       datosUsuario.push(usuario[user]);
//       //console.log(usuario[user]);
//     }
//     console.log(datosUsuario[1]);
    
    
    
//     /** opcion de obtencion de datos
//     var a = {
//       b : datosUsuario[1]
//     }
//     console.log(a);
//  */
//   }


  ngOnInit() {
    const animation = createAnimation()
   .addElement(document.querySelector('.square'))
   .duration(1500)
   .iterations(Infinity)
   .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
   .fromTo('opacity', '1', '0.2');

document.querySelector('#play').addEventListener('click', () => {
  animation.play();
});

document.querySelector('#pause').addEventListener('click', () => {
  animation.pause();
});

document.querySelector('#stop').addEventListener('click', () => {
  animation.stop();
});
  }
  

}

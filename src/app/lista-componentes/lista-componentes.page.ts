import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-componentes',
  templateUrl: './lista-componentes.page.html',
  styleUrls: ['./lista-componentes.page.scss'],
})
export class ListaComponentesPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
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

}

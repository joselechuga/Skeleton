import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from '../inicio/inicio.component';

import { ListaComponentesPage } from './lista-componentes.page';

const routes: Routes = [
  {
    path: '',
    component: ListaComponentesPage,
    children:[
      {
        path:'inicio',
        component: InicioComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaComponentesPageRoutingModule {}

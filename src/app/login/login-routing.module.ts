import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Login2Page } from '../login2/login2.page';
import { PaginaintentoPage } from '../paginaintento/paginaintento.page';
import { RegistroPage } from '../registro/registro.page';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
    children:[
      {
        path:'paginaintento',
        component:PaginaintentoPage
      },
      {
        path:'login2',
        component:Login2Page
      },
      {
        path:'registro',
        component:RegistroPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}

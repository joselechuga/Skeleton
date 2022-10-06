import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { TiendasComponent } from '../tiendas/tiendas.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'catalogo',
        component: CatalogoComponent
      },
      {
        path:'tiendas',
        component: TiendasComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

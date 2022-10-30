import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaintentoPage } from './paginaintento.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaintentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaintentoPageRoutingModule {}

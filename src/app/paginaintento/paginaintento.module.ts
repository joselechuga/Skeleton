import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaintentoPageRoutingModule } from './paginaintento-routing.module';

import { PaginaintentoPage } from './paginaintento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PaginaintentoPageRoutingModule
  ],
  declarations: [PaginaintentoPage]
})
export class PaginaintentoPageModule {}

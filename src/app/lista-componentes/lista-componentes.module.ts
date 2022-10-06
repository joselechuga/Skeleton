import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaComponentesPageRoutingModule } from './lista-componentes-routing.module';

import { ListaComponentesPage } from './lista-componentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaComponentesPageRoutingModule
  ],
  declarations: [ListaComponentesPage]
})
export class ListaComponentesPageModule {}

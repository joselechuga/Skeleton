import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CatalogoComponent } from './catalogo.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  
  imports: [
    CommonModule,
    IonicModule,
    BrowserModule,
    CatalogoModule,
    
  ],
  declarations: [CatalogoComponent]
})
export class CatalogoModule { }

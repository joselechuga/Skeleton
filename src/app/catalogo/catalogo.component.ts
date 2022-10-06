import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GetApiService } from './get-api.service';
import { NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss'],
  template:' <div *ngFor="let i of personajes"></div>'
})
export class CatalogoComponent implements OnInit {

  //datos = fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(res=>res.json()).then(response=>{console.log(response)});

  @Input() pokemones;

  @Input() array: any;

  personajes: Array<any>;

  constructor(public _services:GetApiService,private http:HttpClient,
    public navCtrl:NavController) {}

  ngOnInit() {

    this.http.get<any>('https://rickandmortyapi.com/api/character')
    .subscribe(res => {
      this.personajes = res.results;
      console.log('personajes',this.personajes);
    })
  

    //var datos = fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(res=>res.json()).then(response=>{console.log(response)});
    this._services.obtenerDatos().subscribe(
      (data) => {this.pokemones = data},
      (error)=> {console.log(error);}
    )


    

  }



}

import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {map} from "rxjs/operators";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  //splash = true;
  //tabBarElement: any;

  producto:any = [];
  permission: boolean;

  constructor(private http:HttpClient,
    public navCtrl:NavController) {
      //this.tabBarElement = document.querySelector('.tabbar');
    }

/**
 *   ionViewDidLoad(){
   // this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      //this.tabBarElement.style.display = 'flex';
    },1000);
  }
 */

  ngOnInit() {
    this.permission = true;
    this.getproducto().subscribe(res=>{
      console.log("Res",res)
      this.producto= res;
    });
  }

  getproducto(){
    return this.http
    .get("assets/files/producto.json")
    .pipe(
      map((res:any) =>{
        return res.data;
      })
    )
  }
}


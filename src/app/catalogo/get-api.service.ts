import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(public _http:HttpClient) { }

  obtenerDatos(){
    return this._http.get('https://jsonplaceholder.typicode.com/users');
   }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  // no funciona, tiene que ser con la carpeta assets
  // private productUrl = '/api/products/products.json';
  //  al 99%
  //'https://jsonplaceholder.typicode.com/posts'

  private productUrl = 'assets/api/products/products.json';

  constructor(private _http: HttpClient) { }

  getProductos(): Observable<Producto[]>{
    return this._http.get<Producto[]>(this.productUrl);
  }
}

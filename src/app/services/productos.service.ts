import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, Observable, throwError } from 'rxjs';
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

  getProduct(id: number): Observable<Producto | undefined> {
    return this.getProductos()
      .pipe(
        map((products: Producto[]) => products.find(p => p.productId === id))
      );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}

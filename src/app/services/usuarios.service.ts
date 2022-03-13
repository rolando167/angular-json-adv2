import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario } from '../models/Usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private productUrl = 'assets/api/users/users.json';

  constructor(private _http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]>{
    return this._http.get<Usuario[]>(this.productUrl).pipe(
      map((user: any) =>{
        return user.objects // <= *** ◄◄◄◄ dentro de objects
      })
    );
  }

}

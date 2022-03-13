import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/Usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit, OnDestroy {

  isLoading: boolean = true;
  errorMessage!: string;

  usuarios: Usuario[] = [];

  public interObservableSubs$!: Subscription;

  constructor(private _usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  private obtenerUsuarios(){
    this.interObservableSubs$ = this._usuarioService.getUsuarios().subscribe(
      (data)=>{
        console.log(data);
        this.usuarios = data;
        this.isLoading = false;
      },
      (error) => {
        console.log('error 🔴');
      }
    );
  }

  ngOnDestroy(): void {
    this.interObservableSubs$.unsubscribe();
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit, OnDestroy {

  isLoading: boolean = true;
  errorMessage!: string;

  productos: Producto[] = [];

  constructor(private _productoService: ProductosService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }
  ngOnDestroy(): void {

  }

  private obtenerProductos(){
    this._productoService.getProductos().subscribe(
      (data)=>{
        console.log(data);
        this.productos = data;
      },
      (error) => {
        console.log('error 🔴');
      }
    );
  }
}

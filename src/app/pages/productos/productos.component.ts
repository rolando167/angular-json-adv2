import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
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

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  public interObservableSubs$!: Subscription;

  constructor(private _productoService: ProductosService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    // this._unsubscribeAll.next(null);
    // this._unsubscribeAll.complete();

    this.interObservableSubs$.unsubscribe();
  }

  private obtenerProductos(){
    this.interObservableSubs$ = this._productoService.getProductos().subscribe(
      (data)=>{
        console.log(data);
        this.productos = data;
        this.isLoading = false;
      },
      (error) => {
        console.log('error 🔴');
      }
    );
  }
}

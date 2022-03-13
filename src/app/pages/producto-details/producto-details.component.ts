import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Producto } from 'src/app/models/Producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-producto-details',
  templateUrl: './producto-details.component.html',
  styleUrls: ['./producto-details.component.css']
})
export class ProductoDetailsComponent implements OnInit, OnDestroy {

  errorMessage = '';
  errorNoExiste : boolean = false;

  product: Producto | undefined;

  public interObservableSubs$!: Subscription;

  constructor(private route: ActivatedRoute,
            private router: Router,
            private _productoService: ProductosService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getProducto(id);
    }
  }

  ngOnDestroy(): void {
    this.interObservableSubs$.unsubscribe();
  }


  getProducto(id: number): void {
    this.interObservableSubs$ = this._productoService.getProduct(id).subscribe({
      next: product => {this.product = product; if(!product) this.errorNoExiste = true;
      },
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/productos']);
  }
}

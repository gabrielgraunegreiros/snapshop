import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'products-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  @Input()
  public productListReceived: Product[] = [];

  constructor(
    private _shoppingCartService: ShoppingCartService,
  ) {}

  emitProduct = (producto: Product) => {
    this._shoppingCartService.addToCart(producto);
    return producto;
  }

  getEmitProductFunction(producto: Product) {
    return () => this.emitProduct(producto);
  }
}

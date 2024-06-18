import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';

@Component({
  selector: 'products-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  @Input()
  public productListReceived: Product[] = [];
  @Output()
  public emittProduct: EventEmitter<Product> = new EventEmitter();

  onButtonClicked(productSelected: Product): void {
    this.emittProduct.emit(productSelected);
  }

  constructor(private _shoppingCartService: ShoppingCartService) {}

  emitProduct = (producto: Product) => {
    this._shoppingCartService.addToCart(producto);
    return producto;
  }

  getEmitProductFunction(producto: Product) {
    return () => this.emitProduct(producto);
  }
}

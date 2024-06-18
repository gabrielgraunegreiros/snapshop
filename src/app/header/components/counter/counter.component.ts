import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';

@Component({
  selector: 'header-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public shoppingCartLength: number = 0;

  constructor(private _shoppingCartService: ShoppingCartService) {
    this._shoppingCartService.cartItems.subscribe(productList => {
      this.shoppingCartLength = productList.length;
    });
  }
}

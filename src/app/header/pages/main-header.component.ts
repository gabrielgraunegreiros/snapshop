import { Component, EventEmitter, Output } from '@angular/core';
import { ShoppinCartService } from '../services/shoppin-cart.service';

@Component({
  selector: 'header-main-header',
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css'
})
export class MainHeaderComponent {
  constructor(private _shoppingCartService: ShoppinCartService) {}

  get cartItemsLength() {
    return this._shoppingCartService.cartItems.length;
  }

  @Output()
  public onCartClicked: EventEmitter<boolean> = new EventEmitter();

  onCartClick() {
    this.onCartClicked.emit(true);
  }
}

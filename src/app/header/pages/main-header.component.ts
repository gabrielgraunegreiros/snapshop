import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { ShoppinCartService } from '../services/shoppin-cart.service';
import { Product } from '../../products/interfaces/product.interface';

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

  @Input()
  public cartUpdated: Product[] = [];

  get cartItemsUpdatedLength(): number {
    return this.cartUpdated.length;
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['cartUpdated']) {
      this._shoppingCartService.onItemDeleted(this.cartUpdated);
    }
  }
}

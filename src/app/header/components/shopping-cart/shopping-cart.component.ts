import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../products/interfaces/product.interface';

@Component({
  selector: 'header-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  @Output()
  public onIconClicked: EventEmitter<boolean> = new EventEmitter();

  onIconClick(): void {
    this.onIconClicked.emit(true);
  }
}

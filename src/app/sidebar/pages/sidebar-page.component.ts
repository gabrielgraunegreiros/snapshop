import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../products/interfaces/product.interface';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';

@Component({
  selector: 'sidebar-sidebar-page',
  templateUrl: './sidebar-page.component.html',
  styleUrl: './sidebar-page.component.css'
})
export class SidebarPageComponent {
  public itemList: Product[] = [];

  @Output()
  public closeClicked: EventEmitter<boolean> = new EventEmitter();

  closeSidebar(): void {
    this.closeClicked.emit(false);
  }

  constructor(private _shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
    this._shoppingCartService.cartItems.subscribe(productList => {
      this.itemList = productList
    });
  }

  getTotalPrice(): number {
    return this.itemList.reduce((total, producto) => total + producto.precio, 0);
  }

  deleteItem(deleteItem: boolean, indexOfProduct: number): void {
    if(deleteItem) {
      this._shoppingCartService.removeFromCart(indexOfProduct);
    }
  }
}

import { Component, inject } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Product } from '../../products/interfaces/product.interface';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'shared-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  public itemList: Product[] = [];

  constructor(
    private _shoppingCartService: ShoppingCartService,
    private _dialogRef: MatDialogRef<PopupComponent>
  ) {}

  ngOnInit() {
    this._shoppingCartService.cartItems.subscribe(productList => {
      this.itemList = productList
    });
  }

  getTotalPrice(): number {
    return this.itemList.reduce((total, producto) => total + producto.precio, 0);
  }

  deleteItem(indexOfProduct: number): void {
    this._shoppingCartService.removeFromCart(indexOfProduct);
  }

  onCloseIconClicked(): void {
    this._dialogRef.close();
  }
}

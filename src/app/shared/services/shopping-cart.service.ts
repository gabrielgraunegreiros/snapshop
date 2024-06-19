import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../products/interfaces/product.interface';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cartItemsSubject = new BehaviorSubject<Product[]>([]);
  cartItems = this.cartItemsSubject.asObservable();

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor (private _snackBar: MatSnackBar) {}

  addToCart(product: Product) {
    const currentItems = this.cartItemsSubject.value;
    this.cartItemsSubject.next([...currentItems, product]);
    this.openSnackBar('Producto agregado al carrito');
  }

  removeFromCart(indexOfProduct: number) {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = currentItems.filter((_, index) => index !== indexOfProduct);
    this.cartItemsSubject.next(updatedItems);
  }

  openSnackBar(message: string) {
    this._snackBar.open(`${message}`, '' , {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 1500,
    });
  }
}

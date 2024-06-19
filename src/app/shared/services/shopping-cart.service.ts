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

  constructor (private _snackBar: MatSnackBar) {
    this.loadFromLocalStorage();
  }

  addToCart(product: Product) {
    const currentItems = this.cartItemsSubject.value;
    this.cartItemsSubject.next([...currentItems, product]);
    this.saveToLocalStorage([...currentItems, product]);
    this.openSnackBar('Producto agregado al carrito');
  }

  removeFromCart(indexOfProduct: number) {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = currentItems.filter((_, index) => index !== indexOfProduct);
    this.cartItemsSubject.next(updatedItems);
    this.saveToLocalStorage(updatedItems);
    this.openSnackBar('Producto eliminado del carrito');
  }

  private saveToLocalStorage(cartItems: Product[]) {
    localStorage.setItem('shopping-cart', JSON.stringify(cartItems));
    console.log(JSON.parse(localStorage.getItem('shopping-cart')!));
  }

  private loadFromLocalStorage() {
    if (!localStorage.getItem('shopping-cart')) return;
    this.cartItemsSubject.next(JSON.parse(localStorage.getItem('shopping-cart')!));
    console.log(JSON.parse(localStorage.getItem('shopping-cart')!));
  }

  openSnackBar(message: string) {
    this._snackBar.open(`${message}`, '' , {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 1500,
    });
  }
}

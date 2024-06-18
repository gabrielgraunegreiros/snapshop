import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../products/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cartItemsSubject = new BehaviorSubject<Product[]>([]);
  cartItems = this.cartItemsSubject.asObservable();

  addToCart(product: Product) {
    const currentItems = this.cartItemsSubject.value;
    this.cartItemsSubject.next([...currentItems, product]);
  }

  removeFromCart(indexOfProduct: number) {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = currentItems.filter((_, index) => index !== indexOfProduct);
    this.cartItemsSubject.next(updatedItems);
  }
}

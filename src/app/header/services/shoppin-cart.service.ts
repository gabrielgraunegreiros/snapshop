import { Injectable } from '@angular/core';
import { Product } from '../../products/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppinCartService {
  public cartItems: Product[] = [];
  constructor() { }

  onItemAdded(newProduct: Product): void {
    this.cartItems.push(newProduct);
    console.log(this.cartItems);
  }

  onItemDeleted(itemsUpdated: Product[]): void {
    this.cartItems = itemsUpdated;
  }
}

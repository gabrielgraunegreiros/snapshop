import { Component, ViewChild } from '@angular/core';
import { Product } from './products/interfaces/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'snapshop';

  public cartItemList: Product[] = [];
  public cartItemListUpdated: number = 0;
  public isSideBarVisible: boolean = false;

  receiveCart(itemsList: Product[]) {
    this.cartItemList = itemsList;
  }

  showShoppingCart(show: boolean): void {
    this.isSideBarVisible = show;
  }

  updateList(listUpdated: Product[]) {
    this.cartItemList = listUpdated;
  }
}

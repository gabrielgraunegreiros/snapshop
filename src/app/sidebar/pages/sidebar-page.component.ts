import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../products/interfaces/product.interface';

@Component({
  selector: 'sidebar-sidebar-page',
  templateUrl: './sidebar-page.component.html',
  styleUrl: './sidebar-page.component.css'
})
export class SidebarPageComponent {
  @Input()
  public itemList: Product[] = [];

  @Output()
  public closeClicked: EventEmitter<boolean> = new EventEmitter();

  closeSidebar(): void {
    this.closeClicked.emit(false);
  }

  getTotalPrice(): number {
    return this.itemList.reduce((total, producto) => total + producto.precio, 0);
  }

  @Output()
  public listUpdated: EventEmitter<Product[]> = new EventEmitter();

  deleteItem(itemIndexToDelete: number): void {
    this.itemList = this.itemList.filter((_product, index) => index !== itemIndexToDelete);
    this.listUpdated.emit(this.itemList);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'header-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  private showSidebar: boolean = false;
  @Output()
  public onIconClicked: EventEmitter<boolean> = new EventEmitter();

  onIconClick(): void {
    this.onIconClicked.emit(true);
    this.showSidebar = !this.showSidebar;
  }
}

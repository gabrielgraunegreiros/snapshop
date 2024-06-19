import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../products/interfaces/product.interface';
import { CategoriesService } from '../../products/services/categories.service';

@Component({
  selector: 'header-main-header',
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css'
})
export class MainHeaderComponent {
  @Output()
  public onCartClicked: EventEmitter<boolean> = new EventEmitter();

  onCartClick() {
    this.onCartClicked.emit(true);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'products-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.css'
})
export class CategoriesListComponent {
  @Input()
  public categories: Category[] = [];

  @Input()
  public currentCategory: number = 0;

  @Output()
  public onCategoryClicked: EventEmitter<number> = new EventEmitter();

  onCategoryClick(index: number): void {
    console.log(index);
    this.onCategoryClicked.emit(index);
  }
}

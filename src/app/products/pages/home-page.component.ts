import { Component } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'products-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.categoriesService.getCategories();
  }

  get categories() {
    return this.categoriesService.categoriesList;
  }

  get categoryCurrentListing(): number {
    return this.categoriesService.categoryCurrentListing;
  }

  onCategoryClicked(index: number): void {
    this.categoriesService.onCategoryChanged(index);
  }
}

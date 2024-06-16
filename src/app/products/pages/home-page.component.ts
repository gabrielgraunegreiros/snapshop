import { Component } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { ProductsListService } from '../services/products-list.service';
import { Product } from '../interfaces/product.interface';
import { Category } from '../interfaces/category.interface';

@Component({
  selector: 'products-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  public productsFiltered: Product[] = [];
  public categoriesList: Category[] = [];
  constructor(
    private _categoriesService: CategoriesService,
    private _productsListService: ProductsListService
  ) {}

  ngOnInit() {
    this._categoriesService.getCategories().subscribe( categories => {
      this.categoriesList = categories;
    });
    this._productsListService.getProducts().subscribe( products => {
      this.productsFiltered = products;
      this.productsFiltered = this._productsListService.getProductsByCategory(0);
    });
  }

  get categoryCurrentListing(): number {
    return this._categoriesService.categoryCurrentListing;
  }

  onCategoryClicked(index: number): void {
    this._categoriesService.onCategoryChanged(index);
    this.productsFiltered = this._productsListService.getProductsByCategory(index);
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { ProductsListService } from '../services/products-list.service';
import { Product } from '../interfaces/product.interface';
import { Category } from '../interfaces/category.interface';
import { ShoppinCartService } from '../../header/services/shoppin-cart.service';

@Component({
  selector: 'products-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  public productsFiltered: Product[] = [];
  public categoriesList: Category[] = [];
  public isLoading: boolean = false;
  constructor(
    private _categoriesService: CategoriesService,
    private _productsListService: ProductsListService,
    private _shoppingCartService: ShoppinCartService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.toggleBodyScroll(true);
    this._categoriesService.getCategories().subscribe( categories => {
      this._categoriesService.onCategoryChanged(0);
      this.categoriesList = categories;
    });
    this._productsListService.getProducts().subscribe( products => {
      this.productsFiltered = products;
      this.productsFiltered = this._productsListService.getProductsByCategory(0);
      this.isLoading = false;
      this.toggleBodyScroll(false);
    });
  }

  toggleBodyScroll(isVisible: boolean) {
    if (isVisible) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  get categoryCurrentListing(): number {
    return this._categoriesService.categoryCurrentListing;
  }

  onCategoryClicked(index: number): void {
    this._categoriesService.onCategoryChanged(index);
    this.productsFiltered = this._productsListService.getProductsByCategory(index);
  }

  onProductReceived(newProduct: Product): void {
    this._shoppingCartService.onItemAdded(newProduct);
    this.emitCart();
  }

  @Output()
  public onCartUpdated: EventEmitter<Product[]> = new EventEmitter();

  emitCart() {
    this.onCartUpdated.emit(this._shoppingCartService.cartItems);
  }
}

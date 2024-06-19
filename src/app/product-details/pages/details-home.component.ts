import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsService } from '../services/product-details.service';
import { switchMap } from 'rxjs';
import { Product } from '../../products/interfaces/product.interface';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';

@Component({
  selector: 'product-details-home',
  templateUrl: './details-home.component.html',
  styleUrl: './details-home.component.css'
})
export class DetailsHomeComponent implements OnInit{
  public productoADetallar?: Product;
  public isLoading: boolean = false;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private router: Router,
    private _productDetailsService: ProductDetailsService,
    private _shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.toggleBodyScroll(true);
    this._activatedRoute.params.pipe(
      switchMap(({nombre}) => this._productDetailsService.getProductByName(nombre))
    ).subscribe( producto => {
      if (!producto) {
        return this.router.navigate(['/home']);
      }
      this.isLoading = false;
      this.toggleBodyScroll(true);
      return this.productoADetallar = producto;
    });
  }

  toggleBodyScroll(isVisible: boolean) {
    if (isVisible) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  emitProduct = (producto: Product) => {
    this._shoppingCartService.addToCart(producto);
    return producto;
  }

  getEmitProductFunction(producto: Product) {
    return () => this.emitProduct(producto);
  }
}

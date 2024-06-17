import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsService } from '../services/product-details.service';
import { switchMap } from 'rxjs';
import { Product } from '../../products/interfaces/product.interface';

@Component({
  selector: 'product-details-home',
  templateUrl: './details-home.component.html',
  styleUrl: './details-home.component.css'
})
export class DetailsHomeComponent implements OnInit{
  public productoADetallar?: Product;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private router: Router,
    private _productDetailsService: ProductDetailsService,
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.pipe(
      switchMap(({nombre}) => this._productDetailsService.getProductByName(nombre))
    ).subscribe( producto => {
      if (!producto) {
        return this.router.navigate(['/home']);
      }
      return this.productoADetallar = producto;
    });
  }
}

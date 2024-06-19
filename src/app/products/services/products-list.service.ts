import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {
  public productsList: Product[] = [];
  private serviceUrl: string = 'https://prueba--tecnica-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.serviceUrl}/productos.json`).pipe(
      tap(products => this.productsList = products) // Almacenar los productos en productsList
    );
  }

  getProductsByCategory(categoryIndex: number): Product[] {
    let category: string;
    switch (categoryIndex) {
      case 0:
        category = 'Tecnología';
        break;
      case 1:
        category = 'Ropa';
        break;
      case 2:
        category = 'Calzado';
        break;
      default:
        category = 'Tecnología';
        break;
    }
    return this.productsList.filter(product => product.categoria === category);
  }
}

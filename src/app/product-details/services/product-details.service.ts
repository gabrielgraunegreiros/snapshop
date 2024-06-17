import { Product } from './../../products/interfaces/product.interface';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  public apiUrl: string = 'https://prueba--tecnica-default-rtdb.firebaseio.com'
  // https://prueba--tecnica-default-rtdb.firebaseio.com/productos.json?orderBy="nombre"&equalTo="TELEVISOR XIAOMI LED HD 32'' SMART TV ELA4644LM"

  constructor(private http: HttpClient) { }

  getProductByName(id: string): Observable<Product | null> {
    return this.http.get<{[key: string]: Product}>(`${this.apiUrl}/productos.json?orderBy="id"&equalTo="${id}"`).pipe(
      map(producto => {
        const atributos = Object.keys(producto);
        return atributos.length > 0 ? producto[atributos[0]] : null;
      })
    );
  }
}

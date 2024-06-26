import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  public categoriesList: Category[] = [];
  public categoryCurrentListing: number = 0;
  private serviceUrl: string = 'https://prueba--tecnica-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.serviceUrl}/categorias.json`);
  }

  onCategoryChanged(index: number): void {
    this.categoryCurrentListing = index;
  }
}

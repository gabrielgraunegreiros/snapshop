import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { RouterModule } from '@angular/router';
import { MainButtonModule } from '../shared/main-button.module';



@NgModule({
  declarations: [
    HomePageComponent,
    CategoriesListComponent,
    ProductsListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainButtonModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class ProductsModule { }

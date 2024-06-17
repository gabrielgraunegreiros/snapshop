import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsHomeComponent } from './pages/details-home.component';
import { ProductDetailsRoutingModule } from './product-details-routing.module';



@NgModule({
  declarations: [
    DetailsHomeComponent
  ],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule
  ],
})
export class ProductDetailsModule { }

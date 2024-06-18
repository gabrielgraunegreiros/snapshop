import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsHomeComponent } from './pages/details-home.component';
import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DetailsHomeComponent
  ],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    SharedModule
  ],
})
export class ProductDetailsModule { }

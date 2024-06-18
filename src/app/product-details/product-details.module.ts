import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsHomeComponent } from './pages/details-home.component';
import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { MainButtonModule } from '../shared/main-button.module';



@NgModule({
  declarations: [
    DetailsHomeComponent
  ],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    MainButtonModule
  ],
})
export class ProductDetailsModule { }

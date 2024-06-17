import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsHomeComponent } from './pages/details-home.component';



@NgModule({
  declarations: [
    DetailsHomeComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DetailsHomeComponent
  ]
})
export class ProductDetailsModule { }

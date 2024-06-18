import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MainHeaderComponent } from './pages/main-header.component';
import { CounterComponent } from './components/counter/counter.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ShoppingCartComponent,
    MainHeaderComponent,
    CounterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    ShoppingCartComponent,
    MainHeaderComponent,
    CounterComponent
  ]
})
export class HeaderModule { }

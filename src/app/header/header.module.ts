import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MainHeaderComponent } from './pages/main-header.component';
import { CounterComponent } from './components/counter/counter.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [
    ShoppingCartComponent,
    MainHeaderComponent,
    CounterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule
  ],
  exports: [
    ShoppingCartComponent,
    MainHeaderComponent
  ]
})
export class HeaderModule { }

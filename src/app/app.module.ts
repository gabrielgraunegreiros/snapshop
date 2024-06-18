import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

import { HeaderModule } from './header/header.module';
import { ProductsModule } from './products/products.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsModule } from './product-details/product-details.module';
import { SharedModule } from './shared/shared.module';
import { provideAnimations } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    ProductsModule,
    SidebarModule,
    ProductDetailsModule,
    SharedModule,
    MatSnackBarModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

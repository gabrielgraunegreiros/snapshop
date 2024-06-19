import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainButtonComponent } from './main-button/main-button.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    MainButtonComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  exports: [
    MainButtonComponent,
    LoadingSpinnerComponent,
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainButtonComponent } from './main-button/main-button.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    MainButtonComponent,
  ],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  exports: [
    MainButtonComponent
  ]
})
export class SharedModule { }

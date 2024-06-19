import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainButtonComponent } from './main-button/main-button.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PopupComponent } from './popup/popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainButtonComponent,
    LoadingSpinnerComponent,
    PopupComponent,
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatDialogModule,
    RouterModule
  ],
  exports: [
    MainButtonComponent,
    LoadingSpinnerComponent,
    PopupComponent
  ]
})
export class SharedModule { }

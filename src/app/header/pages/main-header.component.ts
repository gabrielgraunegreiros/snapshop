import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../shared/popup/popup.component';

@Component({
  selector: 'header-main-header',
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css'
})
export class MainHeaderComponent {
  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(PopupComponent, {
      width: '50%',
      height: 'auto',
      maxHeight: '70%'
    });
  }
}

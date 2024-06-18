import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-main-button',
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.css'
})
export class MainButtonComponent {
  @Input()
  public texto: string = '';

  @Input()
  public action?: () => any;

  onButtonClicked(): void {
    if(this.action) {
      this.action();
    }
  }
}

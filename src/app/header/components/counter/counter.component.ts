import { Component, Input } from '@angular/core';

@Component({
  selector: 'header-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input()
  public shoppingCartLength: number = 0;
}

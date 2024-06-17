import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'header-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input()
  public shoppingCartLength: number = 0;

  @Input()
  public shoppingCartLengthUpdated: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['shoppingCartLengthUpdated']) {
      this.shoppingCartLength = this.shoppingCartLengthUpdated;
    }
  }
}

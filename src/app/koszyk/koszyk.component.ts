import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-koszyk',
  standalone: true,
  templateUrl: './koszyk.component.html',
  styleUrls: ['./koszyk.component.css']
})
export class KoszykComponent {
  @Input() koszykWartosc: number = 0.00;
  @Output() resetKoszyka = new EventEmitter<void>();

  wyczyscKoszyk() {
    this.resetKoszyka.emit();
  }
}

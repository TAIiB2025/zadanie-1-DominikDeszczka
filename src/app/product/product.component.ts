import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() products!: { nazwa: string; cena: number; dataUtworzenia: Date; czyPromocja: boolean; liczbaSztuk: number }[];
  @Output() dodanoDoKoszyka = new EventEmitter<number>();

  dodajDoKoszyka(product: any) {
    this.dodanoDoKoszyka.emit(product.cena);
    product.liczbaSztuk += 1;
  }
}

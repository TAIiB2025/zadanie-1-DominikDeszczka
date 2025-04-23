import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KoszykComponent } from './koszyk/koszyk.component';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, KoszykComponent, ProductComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pokazProdukty = true;
  koszykWartosc = 0.00;

  products = [
    { nazwa: 'ProduktA', cena: 100, dataUtworzenia: new Date(2025, 9, 23), czyPromocja: false, liczbaSztuk: 0 },
    { nazwa: 'ProduktB', cena: 250, dataUtworzenia: new Date(2025, 8, 10), czyPromocja: true, liczbaSztuk: 0 },
    { nazwa: 'ProduktC', cena: 500, dataUtworzenia: new Date(2023, 4, 5), czyPromocja: false, liczbaSztuk: 0 },
    { nazwa: 'ProduktD', cena: 750, dataUtworzenia: new Date(2025, 5, 15), czyPromocja: false, liczbaSztuk: 0 },
    { nazwa: 'ProduktE', cena: 1000, dataUtworzenia: new Date(2024, 6, 1), czyPromocja: true, liczbaSztuk: 0 }
  ];

  pokazujProdukty() {
    this.pokazProdukty = !this.pokazProdukty;
  }

  aktualizujKoszyk(cenaProduktu: number) {
    this.koszykWartosc += cenaProduktu;
  }

  wyczyscKoszyk() {
    this.koszykWartosc = 0.00;
    this.products.forEach(product => product.liczbaSztuk = 0);
  }

}

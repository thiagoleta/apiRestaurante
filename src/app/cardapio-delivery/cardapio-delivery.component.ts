import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { ApiRestauranteService } from '../api-restaurante.service';

@Component({
  selector: 'app-cardapio-delivery',
  templateUrl: './cardapio-delivery.component.html',
  styleUrls: ['./cardapio-delivery.component.css']
})
export class CardapioDeliveryComponent implements OnInit {

  cardapio = [];
  url = environment.apiUrl;

  constructor(private apiRestaurante: ApiRestauranteService) { }

  ngOnInit(): void {
    this.apiRestaurante.getCardapio()
      .subscribe(
        (data: any[]) => {
          this.cardapio = data;
        },
        e => {
          console.log(e);
        }
      );
  }

}



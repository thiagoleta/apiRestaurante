import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { ApiRestauranteService } from '../api-restaurante.service';
import * as helper from '../_helpers/cesta-compras.helper';
import * as file from '../_helpers/file.helper';

@Component({
  selector: 'app-cardapio-delivery',
  templateUrl: './cardapio-delivery.component.html',
  styleUrls: ['./cardapio-delivery.component.css']
})
export class CardapioDeliveryComponent implements OnInit {

  cardapio = [];
  categorias = [];

  produto = {
    id: '', foto: '', nome: '', descricao: '', preco: '', precoDecimal: 0,
    categoria: { id: '', nome: '' }
  };

  mensagem: string;

  url = environment.apiUrl;

  page = 1; //guardar a paginação..

  constructor(private apiRestaurante: ApiRestauranteService) { }

  ngOnInit(): void {
    this.consultarCardapio();
    this.consultarCategorias();
  }

  consultarCardapio(): void {
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

  consultarCategorias(): void {
    this.apiRestaurante.getCategorias()
      .subscribe(
        (data: any[]) => {
          this.categorias = data;
        },
        e => {
          console.log(e);
        }
      );
  }

  obterItem(item): void {
    this.produto = item;
  }

  adicionarItem(produto): void {
    //adicionar na cesta de compras
    helper.adicionarItem(produto);
    //exibir mensagem
    this.mensagem = `Item ${produto.nome}, adicionado na cesta de compras com sucesso.`;
  }

  filtrarCardapio(event): void {

    var idCategoria = event.target.value;

    if (idCategoria != "0") {
      this.apiRestaurante.getCardapioPorCategoria(idCategoria)
        .subscribe(
          (data: any[]) => {
            this.cardapio = data;
          },
          e => {
            console.log(e);
          }
        );
    }
    else {
      this.consultarCardapio();
    }
  }

  obterRelatorio(type): void {

    if (type == 'PDF') {
      this.apiRestaurante.getRelatorioPDF()
        .subscribe(
          (data) => {
            file.downloadFile(data, type, 'cardapio-restaurante');
          },
          (e) => {
            console.log(e);
          }
        );
    }
    else if (type == 'EXCEL') {
      this.apiRestaurante.getRelatorioEXCEL()
        .subscribe(
          (data) => {
            file.downloadFile(data, type, 'cardapio-restaurante');
          },
          (e) => {
            console.log(e);
          }
        );
    }
  }

  fecharMensagem(): void {
    this.mensagem = "";
  }

  //evento para realizar a paginação
  handlePageChange(event): void {
    this.page = event;
  }

}



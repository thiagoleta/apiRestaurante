import { Component, OnInit } from '@angular/core';
import * as helper from '../_helpers/cesta-compras.helper';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-cesta-de-compras',
  templateUrl: './cesta-de-compras.component.html',
  styleUrls: ['./cesta-de-compras.component.css']
})
export class CestaDeComprasComponent implements OnInit {

  //atributos..
  dados = { itens: [], total: 0 };  
  url = environment.apiUrl;

  constructor() { }

  ngOnInit(): void {
    this.dados = helper.obterItens();
  }

  adicionarItem(item): void {
    //adicionando na cesta de compras..
    helper.adicionarItem(item);
    //recarregar o conteudo da cesta de compras..
    this.ngOnInit();
  }

  removerItem(item): void {
    //removendo na cesta de compras..
    helper.removerItem(item);
    //recarregar o conteudo da cesta de compras..
    this.ngOnInit();
  }

}



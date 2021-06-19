import { Component, OnInit } from '@angular/core';
import { ApiCepService } from '../api-cep.service';
import { environment } from 'src/environments/environment';
import * as cestaDeComprasHelper from '../_helpers/cesta-compras.helper';
import * as loginClienteHelper from '../_helpers/login-cliente.helper';

@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.component.html',
  styleUrls: ['./finalizar-pedido.component.css']
})
export class FinalizarPedidoComponent implements OnInit {

  //atributos
  cesta = { itens: [], total: 0 };
  url = environment.apiUrl;

  login = {
    accessToken: '',
    cliente: { nome: '', email: '', telefone: '' },
    dataExpiracao: ''
  };

  endereco: {
    logradouro: '', complemento: '', bairro: '', localidade: '', uf: ''
  }

  possuiEndereco = false;

  constructor(private apiCep: ApiCepService) { }

  ngOnInit(): void {
    this.cesta = cestaDeComprasHelper.obterItens();
    this.login = loginClienteHelper.obterCliente();
  }

  obterEndereco(event): void {

    var cep = event.target.value;

    if (cep.length == 9) {
      this.apiCep.getEndereco(cep)
        .subscribe(
          (data: any) => {
            this.endereco = data;
            this.possuiEndereco = true;
          },
          (e) => {
            console.log(e);
            this.possuiEndereco = false;
          }
        )
    }
  }
}


import { Component, OnInit } from '@angular/core';
import { ApiCepService } from '../api-cep.service';

@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.component.html',
  styleUrls: ['./finalizar-pedido.component.css']
})
export class FinalizarPedidoComponent implements OnInit {

  endereco: {
    logradouro: '', complemento: '', bairro: '', localidade: '', uf: ''
  }

  possuiEndereco = false;

  constructor(private apiCep: ApiCepService) { }

  ngOnInit(): void {
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



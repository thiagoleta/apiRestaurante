import { Component, OnInit } from '@angular/core';
import { ApiRestauranteService } from '../api-restaurante.service';
import * as helper from '../_helpers/login-cliente.helper';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent implements OnInit {

  mensagem_erro:string;

  erros = {
    Email: [], Senha: []
  }

  constructor(private apiRestaurante: ApiRestauranteService) { }

  ngOnInit(): void {
  }

  autenticarCliente(formLogin): void {

    this.fecharMensagens();

    this.apiRestaurante.postLogin(formLogin.form.value)
      .subscribe(
        (data) => {
          
          //gravar os dados em sessão..
          helper.adicionarCliente(
            JSON.stringify(data)
          );
          
          location.href = "/finalizar-pedido";
        },
        (e) => {
          switch (e.status) {
            case 400: //BAD REQUEST
              this.erros = e.error.errors;
              break;

            case 500: //INTERNAL SERVER ERROR
              this.mensagem_erro = e.error.message;
              break;
          }
        }
      )
  }

  fecharMensagens() : void {
    this.mensagem_erro = "";
    this.erros = {
      Email: [], Senha: []
    }
  }

}

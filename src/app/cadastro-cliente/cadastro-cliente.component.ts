import { Component, OnInit } from '@angular/core';
import { ApiRestauranteService } from '../api-restaurante.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  //atributos
  mensagem_sucesso: string;
  mensagem_erro: string;

  erros = {
    Nome: [], Email: [], Telefone: [], Senha: [], SenhaConfirmacao: []
  }

  constructor(private apiRestaurante: ApiRestauranteService) { }

  ngOnInit(): void {
  }

  cadastrarCliente(formCadastro): void {

    this.fecharMensagens();

    this.apiRestaurante.postCliente(formCadastro.form.value)
      .subscribe(
        (data: any) => {
          this.mensagem_sucesso = data.message;
          formCadastro.form.reset();
        },
        e => {
          switch (e.status) {
            case 400: //BAD REQUEST
              this.erros = e.error.errors;
              break;

            case 500: //INTERNAL SERVER ERROR
              this.mensagem_erro = e.error.message;
              break;
          }
        }
      );
  }

  fecharMensagens(): void {
    this.mensagem_sucesso = "";
    this.mensagem_erro = "";

    this.erros = {
      Nome: [], Email: [], Telefone: [], Senha: [], SenhaConfirmacao: []
    }
  }
}





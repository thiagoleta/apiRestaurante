import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardapioDeliveryComponent } from './cardapio-delivery/cardapio-delivery.component';
import { CestaDeComprasComponent } from './cesta-de-compras/cesta-de-compras.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { FinalizarPedidoComponent } from './finalizar-pedido/finalizar-pedido.component';
import {AppRoutingModule} from './app.rountig';

@NgModule({
  declarations: [
    AppComponent,
    CardapioDeliveryComponent,
    CestaDeComprasComponent,
    CadastroClienteComponent,
    LoginClienteComponent,
    FinalizarPedidoComponent,
    AppRoutingModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

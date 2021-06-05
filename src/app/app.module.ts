import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardapioDeliveryComponent } from './cardapio-delivery/cardapio-delivery.component';
import { CestaDeComprasComponent } from './cesta-de-compras/cesta-de-compras.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { FinalizarPedidoComponent } from './finalizar-pedido/finalizar-pedido.component';


import { AppRoutingModule } from './app.rountig';
import {AppFormsModule} from './app.forms';
import {AppPaginationModule} from './app.pagination'

@NgModule({
  declarations: [
    AppComponent,
    CardapioDeliveryComponent,
    CestaDeComprasComponent,
    CadastroClienteComponent,
    LoginClienteComponent,
    FinalizarPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppFormsModule,
    AppPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardapioDeliveryComponent } from './cardapio-delivery/cardapio-delivery.component';
import { CestaDeComprasComponent } from './cesta-de-compras/cesta-de-compras.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { FinalizarPedidoComponent } from './finalizar-pedido/finalizar-pedido.component';

//mapeamento de rotas:
const routes : Routes = [
    { path : '', component : CardapioDeliveryComponent },
    { path : 'cesta-de-compras', component : CestaDeComprasComponent },
    { path : 'cadastro-clientes', component : CadastroClienteComponent },
    { path : 'login-cliente', component : LoginClienteComponent },
    { path : 'finalizar-pedido', component : FinalizarPedidoComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
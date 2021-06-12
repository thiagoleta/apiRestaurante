
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiRestauranteService {

  endpoint = environment.apiUrl + "/api"

  //injeção de dependencia para o HttpClient
  constructor(private httpClient: HttpClient) { }

  getDadosRestaurante() {
    return this.httpClient.get(this.endpoint + "/restaurante");
  }

  getCardapio() {
    return this.httpClient.get(this.endpoint + "/cardapio");
  }

  getCardapioPorCategoria(idCategoria) {
    return this.httpClient.get(this.endpoint + "/cardapio/" + idCategoria);
  }

  getItemCardapio(id) {
    return this.httpClient.get(this.endpoint + "/cardapio/" + id);
  }

  getCategorias() {
    return this.httpClient.get(this.endpoint + "/categorias");
  }

  postCliente(cliente) {
    return this.httpClient.post(this.endpoint + "/cliente", cliente);
  }

  postLogin(cliente) {
    return this.httpClient.post(this.endpoint + "/login", cliente);
  }
}

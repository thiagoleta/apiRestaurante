
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCepService {

  constructor(private httpClient: HttpClient) { }

  getEndereco(cep) {
    return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
}

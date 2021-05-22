import { Component, OnInit } from '@angular/core';
import { ApiRestauranteService } from './api-restaurante.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  dadosRestaurante = {
    nomeRestaurante : '',
    foto : '',
    descricao : ''
  };

  constructor(private apiService: ApiRestauranteService) { }

  ngOnInit(): void {

    this.apiService.getDadosRestaurante()
      .subscribe(
        (data:any) => {
          this.dadosRestaurante.nomeRestaurante = data.nome;
          this.dadosRestaurante.foto = environment.apiUrl + data.foto;
          this.dadosRestaurante.descricao = data.descricao;
        },
        e => {
          console.log(e);
        }
      );

  }

}


import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cria',
  templateUrl: './app-cria.component.html',
  styleUrls: ['./app-cria.component.scss'],
})
export class AppCriaComponent {
  show = true;
  nome: string = '';
  email: string = '';
  telefone: string = '';
  cpf: string = '';
  cnpj: string = '';
  url = 'https://sat-project.herokuapp.com';
  constructor(private httpClient: HttpClient) {}
  validaObrigatoriedade(input: FormControl){
    return (input.value ? null : { obrigatoriedade: true});
  }
  postApi(
    nome: string,
    email: string,
    cpf: string,
    telefone: string,
    cnpj: string
  ) {
    let obj = {
      nome,
      email,
      cpf,
      telefone,
      cnpj,
    };
    this.httpClient
      .post<any>(this.url + '/clients/save', obj, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }),
      })
      .subscribe((data) => {
        console.log(data);
        location.reload();
      });
  }
}

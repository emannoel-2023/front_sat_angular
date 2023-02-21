import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-clientes',
  templateUrl: './app-clientes.component.html',
  styleUrls: ['./app-clientes.component.scss'],
})
export class AppClientesComponent implements OnInit {
  url = 'https://sat-project.herokuapp.com';
  obj: any = {};
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.obj = this.getApi();
    console.log(this.obj);
  }
  getApi() {
    let has = this.httpClient.get(this.url + '/clients').toPromise();
    return has;
  }
  deleteApi(id: string) {
    this.httpClient
      .delete(this.url + `/clients/delete/${id}`, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
        }),
      })
      .subscribe((data) => {
        location.reload();
        return data;
      });
  }
}

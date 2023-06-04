import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuscaDadosService {

    public host: string = 'http://localhost:8080/api/'

  constructor(private http: HttpClient) {  }

  public getAllDados(userType:any){
    return new Promise((ret) => {
      this.atualizaHost(userType)
      this.http.get(this.host).subscribe(dados => {

        ret(dados);

      });
    })
  }


  public atualizaHost(userType: any) {
    
    const caminho = '/' + userType;

    if (!this.host.includes(caminho)){
      const antesString = this.host.lastIndexOf('/');
      const novoCaminho = this.host.slice(0,antesString);
      this.host = novoCaminho + caminho;
    }
  }
}

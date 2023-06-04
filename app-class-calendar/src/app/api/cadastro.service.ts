import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  public optionsHeader: any = {headers : new HttpHeaders({'Content-Type':'application/json;charset=UTF-8'})}
  public host:string = 'http://localhost:8080/api/';

  constructor(private http:HttpClient) { }
   
  public postUsuario(obj: any, userType: any) {

    this.atualizaHost(userType);

    return new Promise ((ret)=> {
      
      this.http.post(this.host,JSON.stringify(obj),this.optionsHeader).subscribe(dados => {
        ret(dados)
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

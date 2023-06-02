import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tecnico-detalhe',
  templateUrl: './tecnico-detalhe.page.html',
  styleUrls: ['./tecnico-detalhe.page.scss'],
})
export class TecnicoDetalhePage implements OnInit {

  public tecnico: any

  nomeAtt: any
  cpfAtt: any
  enderecoAtt: any
  telefoneAtt:any
  senhaAtt:any
  status: any
  idTecnico: any
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.tecnico = params['tecnico'];
      this.idTecnico = this.tecnico.idTecnico;
      this.nomeAtt = this.tecnico.nome;
      this.cpfAtt = this.tecnico.cpf;
      this.telefoneAtt = this.tecnico.telefone;
      this.enderecoAtt = this.tecnico.endereco;
      this.senhaAtt = this.tecnico.senha;
    });
  }

}

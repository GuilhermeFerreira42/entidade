import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-professor-detalhe',
  templateUrl: './professor-detalhe.page.html',
  styleUrls: ['./professor-detalhe.page.scss'],
})
export class ProfessorDetalhePage implements OnInit {
  public professor: any

  nomeAtt: any
  cpfAtt: any
  enderecoAtt: any
  telefoneAtt:any
  senhaAtt:any
  status: any
  idProfessor: any
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.professor = params['professor'];
      this.idProfessor = this.professor.idProfessor;
      this.nomeAtt = this.professor.nome;
      this.cpfAtt = this.professor.cpf;
      this.telefoneAtt = this.professor.telefone;
      this.enderecoAtt = this.professor.endereco;
      this.senhaAtt = this.professor.senha;
    });
  }

}

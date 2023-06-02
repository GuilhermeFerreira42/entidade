import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.page.html',
  styleUrls: ['./aluno-detalhe.page.scss'],
})
export class AlunoDetalhePage implements OnInit {

  public aluno: any
  idAluno: any
  nomeAtt: any
  cpfAtt: any
  turmaAtt: any
  enderecoAtt: any
  telefoneAtt:any
  senhaAtt:any
  status: any
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.aluno = params['aluno'];
      this.idAluno = this.aluno.idAluno;
      this.nomeAtt = this.aluno.nome;
      this.cpfAtt = this.aluno.cpf;
      this.telefoneAtt = this.aluno.telefone;
      this.enderecoAtt = this.aluno.endereco;
      this.senhaAtt = this.aluno.senha;
      this.turmaAtt = this.aluno.turma;
    });
  }

}

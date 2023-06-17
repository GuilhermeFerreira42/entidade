import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../api/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  nome : any
  endereco : any
  senha: any
  telefone: any
  turma: any
  cpf: any
  userGroup : any;

  constructor(private servicePostUsuario:CadastroService) {

   }

   public postAluno() {

    let newObj : any = {

      nome : this.nome,
      endereco : this.endereco,
      senha: this.senha,
      telefone: this.telefone,
      turma: this.turma,
      cpf: this.cpf,
      status: true
    }

    this.servicePostUsuario.postUsuario(newObj,this.userGroup).then ((newObj) => {
      console.log(newObj)
      this.cpf = ''
      this.nome = ''
      this.endereco = ''
      this.telefone = ''
      this.turma = ''
      this.senha = ''
    })
   }

   public postTecnico(){

    let newObj : any = {
      nome : this.nome,
      endereco : this.endereco,
      senha: this.senha,
      telefone: this.telefone,
      cpf: this.cpf,
      status : true

    }

    this.servicePostUsuario.postUsuario(newObj,this.userGroup).then ((newObj) => {
      console.log(newObj)
      this.cpf = ''
      this.nome = ''
      this.endereco = ''
      this.telefone = ''
      this.senha = ''
    })
   }

   public postProfessor(){

    let newObj : any = {
      nome : this.nome,
      endereco : this.endereco,
      senha: this.senha,
      telefone: this.telefone,
      cpf: this.cpf,
      status : true

    }

    this.servicePostUsuario.postUsuario(newObj,this.userGroup).then ((newObj) => {
      console.log(newObj)
      this.cpf = ''
      this.nome = ''
      this.endereco = ''
      this.telefone = ''
      this.senha = ''
    })
   }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

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
  userType : any;
  constructor() { }

  ngOnInit() {
  }

}

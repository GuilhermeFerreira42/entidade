import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.page.html',
  styleUrls: ['./aluno.page.scss'],
})
export class AlunoPage implements OnInit {

  itens : any
  constructor(private NavCtrl:NavController) { }

  public irAlunoDetalhe(aluno: any){
    this.NavCtrl.navigateForward('aluno-detalhe',{
      queryParams: { aluno: aluno }
    })
  }

  ngOnInit() {
  }

}

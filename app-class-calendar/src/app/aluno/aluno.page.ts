import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BuscaDadosService } from '../api/busca-dados.service';
import { DeletarService } from '../api/deletar.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.page.html',
  styleUrls: ['./aluno.page.scss'],
})
export class AlunoPage implements OnInit {

  itens : any
  userType: any = 'aluno'
  constructor(private NavCtrl:NavController, private service: BuscaDadosService, private excluirALuno: DeletarService ) { }

  public irAlunoDetalhe(aluno: any){
    this.NavCtrl.navigateForward('aluno-detalhe',{
      queryParams: { aluno: aluno }
    })
  }
  
  public excluirAluno(aluno: any){
    this.excluirALuno.deleteUsuarios(this.userType,aluno.idAluno).then((aluno)=>{

      console.log("delete")
      this.getAllDados();
    })

  }
public getAllDados () {
  this.service.getAllDados (this.userType + 's').then(dados=>{
    this.itens = dados;
    console.log(this.itens)
  })

}


  ngOnInit() {
    this.getAllDados()
  }

}

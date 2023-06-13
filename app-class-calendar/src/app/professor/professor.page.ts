import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { BuscaDadosService } from '../api/busca-dados.service';
import { DeletarService } from '../api/deletar.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.page.html',
  styleUrls: ['./professor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProfessorPage implements OnInit {

  itens : any = []
  public usuario:any
  userType: any = 'professor'
  public button: any
  constructor(private NavCtrl:NavController, private service: BuscaDadosService, private excluirProfessor: DeletarService ) { }
 
  public irProfessorDetalhe(professor: any){
    this.NavCtrl.navigateForward('professor-detalhe',{
      queryParams: { professor: professor }
    })
  }

  

  public deletarProfessor(professor: any){
    this.excluirProfessor.deleteUsuarios(this.userType,professor.idProfessor).then((professor)=>{

      console.log("delete")
      this.getAllDados();
    })
  }

  public getAllDados () {
    this.service.getAllDados (this.userType + 'es').then(dados=>{
      this.itens = dados;
      console.log(this.itens)
    })

}

ngOnInit() {
  this.getAllDados()
}
}

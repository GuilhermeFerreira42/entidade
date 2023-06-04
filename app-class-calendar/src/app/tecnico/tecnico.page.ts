import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BuscaDadosService } from '../api/busca-dados.service';

@Component({
  selector: 'app-tecnico',
  templateUrl: './tecnico.page.html',
  styleUrls: ['./tecnico.page.scss'],
})
export class TecnicoPage implements OnInit {

  itens : any
  userType: any = 'tecnico'
  constructor(private NavCtrl:NavController, private service: BuscaDadosService) { }

  public irTecnicoDetalhe(tecnico: any){
    this.NavCtrl.navigateForward('tecnico-detalhe',{
      queryParams: { tecnico: tecnico }
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

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tecnico',
  templateUrl: './tecnico.page.html',
  styleUrls: ['./tecnico.page.scss'],
})
export class TecnicoPage implements OnInit {

  itens : any
  constructor(private NavCtrl:NavController) { }

  public irTecnicoDetalhe(tecnico: any){
    this.NavCtrl.navigateForward('tecnico-detalhe',{
      queryParams: { tecnico: tecnico }
    })
  }

  ngOnInit() {
  }

}

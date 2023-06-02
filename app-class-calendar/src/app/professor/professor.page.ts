import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.page.html',
  styleUrls: ['./professor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProfessorPage implements OnInit {

  itens : any
  constructor(private NavCtrl:NavController) { }

  public irProfessorDetalhe(professor: any){
    this.NavCtrl.navigateForward('professor-detalhe',{
      queryParams: { professor: professor }
    })
  }

  ngOnInit() {
  }

}

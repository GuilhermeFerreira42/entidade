import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { BuscaDadosService } from '../api/busca-dados.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showAgendamento: boolean = true;
  isMenuOpen: number = 0;

  public usuario : any;
  public userType: any;
  monitoriaType: any = 'monitoria'
  horarioType: any = 'horario'
  itens: any = [];
  items: any = [];
  idMonitoria: any;
  estado: any;
  userInput: any;

  constructor(private navCtrl: NavController, private route : ActivatedRoute, private service : BuscaDadosService) {}

  public getAlldados (){
    this.service.getAllMonitoria(this.monitoriaType+'s').then(dados=>{
      this.items=dados;
    })

  }

  public getAllhorario (){
    this.service.getAllHorario(this.horarioType+'s').then(dados=>{
      this.itens=dados;
    })
    
  }

  public verificarIdAluno(items: any[], usuario: any):boolean {
    for(let i = 0; i < items.length; i++){
      if (items[i].aluno.IdAluno===usuario.IdAluno){
        return true;
      } 
    }
    return false;
  }

  public todosMonitoriasIndisponiveis(items:any[]):boolean {
    return this.items.every((items:{estado: any;})=>items.estado===false);
  }

  public checkHorarioDisponivel(itens:any[]):boolean{
    return itens.some(horario=>horario.disponivel==false);
  }

  formatarHorario(horarioNumerico: number): string {
    const horarioString = horarioNumerico.toString();
    const hora = horarioString.substring(0, horarioString.length - 2);
    const minutos = horarioString.substring(horarioString.length - 2);
    return hora + ':' + minutos;
  }

  ngOnInit() {
      this.getAlldados()
      this.getAllhorario()
      this.route.queryParams.subscribe(params => {
      this.usuario = params['usuario'];
      this.userType = params['userType']});
  }
}


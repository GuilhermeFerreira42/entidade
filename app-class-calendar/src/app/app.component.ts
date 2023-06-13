import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public usuario:any
  public userType:any
  constructor(private router: Router,private navCtrl: NavController,private route: ActivatedRoute) {}

  exibirMenu(): boolean{
    const excludedRoutes = ['login']; // Adicione as rotas que devem excluir o menu
    
    // Verifique se a rota atual está na lista de rotas excluídas
    const currentRoute = this.router.url.split('/')[1];
    return !excludedRoutes.includes(currentRoute);
}

goCadastro(){
  this.navCtrl.navigateForward('cadastro', {
    queryParams: { usuario: this.usuario,
                  userType: this.userType}
  });
}

goAlunos(){
  this.navCtrl.navigateForward('aluno', {
    queryParams: { usuario: this.usuario,
                  userType: this.userType}
  });
}

goTecnicos(){
  this.navCtrl.navigateForward('tecnico', {
    queryParams: { usuario: this.usuario,
                  userType: this.userType}
  });
}

goProfessores() {
  this.navCtrl.navigateForward('professor', {
    queryParams: { button: 'professores',
                  usuario: this.usuario,
                  userType: this.userType }
  })
}

goDisciplinas() {
  this.navCtrl.navigateForward('disciplina', {
    queryParams: {
                  usuario: this.usuario,
                  userType: this.userType }
  })
}

goHorario() {
  this.navCtrl.navigateForward('horario', {
    queryParams: { usuario: this.usuario,
                  userType: this.userType }
  })
}

goHome(){
  this.navCtrl.navigateForward('home', {
    queryParams: { usuario: this.usuario,
                  userType: this.userType}
  });
}

ngOnInit() {
  this.route.queryParams.subscribe(params => {
    this.usuario = params['usuario'];
    this.userType = params['userType']});
}

}

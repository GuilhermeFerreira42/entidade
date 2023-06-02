import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showAgendamento: boolean = true;
  isMenuOpen: number = 0;

  constructor(private navCtrl: NavController) {}

  goPerfil(){
    this.navCtrl.navigateForward('perfil')
    
  }
  toggleAgendamento() {
    this.showAgendamento = !this.showAgendamento;
  }

  toggleMenu(coluna: number) {
    if (this.isMenuOpen === coluna) {
      this.isMenuOpen = 0;
    } else {
      this.isMenuOpen = coluna;
    }
  }
}


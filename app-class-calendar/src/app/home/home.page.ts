import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';

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

  constructor(private navCtrl: NavController, private route : ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.usuario = params['usuario'];
      this.userType = params['userType']});
  }
}


import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

export class MenuComponent implements OnInit {

  constructor(
    private navCtrl: NavController,
    private ppvCtrl: PopoverController
    ) { }

  ngOnInit() {}
 private irParaPagina(pagina) {
    this.navCtrl.navigateForward(pagina);
    this.ppvCtrl.dismiss().then(() => { this.ppvCtrl = null; }); //fecha o popover
  }

  irParaPaginaCadastro() {
    this.irParaPagina('cadastro');
  }
  irParaPaginaHome() {
    this.irParaPagina('home');
  }
  irParaPaginaLogin() {
    this.irParaPagina('login');
  }
  irParaPaginaServicos() {
    this.irParaPagina('servicos');
  }
}



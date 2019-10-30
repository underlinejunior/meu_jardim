import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  configs = {
    jardineiro: false,
    experiencia: true,
    transporte: true
  };

  constructor(private ppvCtrl: PopoverController) {}

  async exibirMenuOpcoes(ev: any) {
    const popover = await this.ppvCtrl.create({
      component: MenuComponent,
      event: ev
    });
    return await popover.present();
  }
  ngOnInit() {
  }
  selectCliente() {
    this.configs.jardineiro = false;
    return false;
  }
  selectJardineiro() {
    this.configs.jardineiro = true;
    return true;
  }
  changeExperiencia() {
    this.configs.experiencia = !this.configs.experiencia;
    return true;
  }
  changeTransporte() {
    this.configs.transporte = !this.configs.transporte;
    return true;
  }

}

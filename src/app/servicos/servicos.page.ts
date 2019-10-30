
import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
})
export class ServicosPage implements OnInit {
  servico = {
    servico: false,
    semana: false,
    diaria: false
  };

  constructor(private ppvCtrl: PopoverController) { }

  ngOnInit() {
  }
  async exibirMenuOpcoes(ev: any) {
    const popover = await this.ppvCtrl.create({
      component: MenuComponent,
      event: ev
    });
    return await popover.present();
  }
  porServico() {
    this.servico.semana = false;
    this.servico.diaria = false;
    this.servico.servico = !this.servico.servico;
    return true;
  }
  porSemana() {
    this.servico.servico = false;
    this.servico.diaria = false;
    this.servico.semana = !this.servico.semana;
    return true;
  }
  porDiaria() {
    this.servico.servico = false;
    this.servico.semana = false;
    this.servico.diaria = !this.servico.diaria;
    return true;
  }
}

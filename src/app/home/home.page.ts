import { Component } from '@angular/core';
import {PopoverController, NavController} from '@ionic/angular';
import { MenuComponent } from '../menu/menu.component';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private ppvCtrl: PopoverController,
    private navCtrl: NavController,
    ) {}

  async exibirMenuOpcoes(ev: any) {
    const popover = await this.ppvCtrl.create({
      component: MenuComponent,
      event: ev
    });
    return await popover.present();
  }

  irParaPagina(pagina) {
    this.navCtrl.navigateForward(pagina);
  }
}

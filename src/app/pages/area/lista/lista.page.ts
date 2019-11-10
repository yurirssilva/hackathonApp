import { NovoLancamentoPage } from './../lancamentos/novo-lancamento/novo-lancamento.page';
import { DesenharMapaPage } from './../desenhar-mapa/desenhar-mapa.page';
import { AreaCadastroPage } from './../area-cadastro/area-cadastro.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-lista',
    templateUrl: './lista.page.html',
    styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

    constructor(
        public modalController: ModalController
    ) { }

    ngOnInit() {
    }

    async novaArea() {
        let modal = await this.modalController.create({ component: AreaCadastroPage, cssClass: 'modal-pequeno' })
        modal.present()
    }
    async novoLancamento() {
        let modal = await this.modalController.create({ component: NovoLancamentoPage, cssClass: 'modal-pequeno' })
        modal.present()
    }
    
}

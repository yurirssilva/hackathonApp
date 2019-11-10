import { BuscaCapimPage } from './../capim/busca-capim/busca-capim.page';
import { DesenharMapaPage } from './../desenhar-mapa/desenhar-mapa.page';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-area-cadastro',
    templateUrl: './area-cadastro.page.html',
    styleUrls: ['./area-cadastro.page.scss'],
})
export class AreaCadastroPage implements OnInit {
    public areaForm: FormGroup
    especieCapim
    constructor(
        public formBuilder: FormBuilder,
        public modalController: ModalController
    ) {
        this.areaForm = formBuilder.group({
            nome: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            observacao: [''],
            fertilidade: [''],
            tamanho: [''],
            especie: ['']
        })
    }

    ngOnInit() {
    }

    async desenharArea() {
        let modal = await this.modalController.create({
            component: DesenharMapaPage
        })
        modal.present()
        let dadosModal = await modal.onDidDismiss()
        if (dadosModal.data) {
            this.areaForm.controls.tamanho.setValue(dadosModal.data.tamanho)
        }
        console.log('dadosModal ==> ', dadosModal);
        console.log('dadosModal ==> ', this.areaForm.value);

    }

    async buscarCapim() {
        let modal = await this.modalController.create({
            component: BuscaCapimPage, cssClass: 'modal-pequeno'
        })
        modal.present()
        let dadosModal = await modal.onDidDismiss()
        if(dadosModal.data){
            this.especieCapim = dadosModal.data
            this.areaForm.controls.especie.setValue(dadosModal.data.tipo)
        }
        console.log('dadosModal ==> ', dadosModal);
    }

    concluir() {

    }
}

import { ApiService } from './../../../../services/api.service';
import { CadastroCapimPage } from './../cadastro-capim/cadastro-capim.page';
import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';

@Component({
    selector: 'app-busca-capim',
    templateUrl: './busca-capim.page.html',
    styleUrls: ['./busca-capim.page.scss'],
})
export class BuscaCapimPage implements OnInit {
    especies = []
    constructor(
        public modalController: ModalController,
        public loadingController: LoadingController,
        public toastController: ToastController,
        private api: ApiService
    ) { }

    ngOnInit() {
        this.buscar()
    }

    async adicionarCapim() {
        let modal = await this.modalController.create({
            component: CadastroCapimPage,
            cssClass: 'modal-pequeno'
        })
        modal.present()
        let dadosModal = await modal.onDidDismiss()

        console.log('dadosModal ==> ', dadosModal);
    }

    async buscar() {
        let loading = await this.loadingController.create({ message: "Buscando..." })
        loading.present()
        let body = `
            query{
                getAllCapims{
                    id
                    tipo
                    alturaEntrada
                    alturaSaidaMaiorFert
                    alturaSaidaMenorFert
                }
            }
        `
        let dados = await this.api.get(body)
        if(!dados.error){
            this.especies = dados.data.getAllCapims
        } else {
            let toast = await this.toastController.create({ message: "Ocorreu um erro, tente novamente", duration: 300 })
            toast.present()
        }
        loading.dismiss()
        console.log("dados ==> ", dados);

    }

    fechar(especie?){
        this.modalController.dismiss(especie)
    }

}

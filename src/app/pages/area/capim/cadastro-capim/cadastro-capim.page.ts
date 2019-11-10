import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, ModalController } from '@ionic/angular';

@Component({
    selector: 'app-cadastro-capim',
    templateUrl: './cadastro-capim.page.html',
    styleUrls: ['./cadastro-capim.page.scss'],
})
export class CadastroCapimPage implements OnInit {
    capim = {
        tipo: '',
        alturaEntrada: '',
        alturaSaidaMaiorFert: '',
        alturaSaidaMenorFert: ''
    }
    constructor(
        public api: ApiService,
        public loadingController: LoadingController,
        public toastController: ToastController,
        public modalController: ModalController
    ) {
    }

    ngOnInit() {
    }
    // createCapim(
    //     tipo: String!
    //     alturaEntrada: Float!
    //     alturaSaidaMaiorFert: Float!
    //     alturaSaidaMenorFert: Float
    // ): Capim!

    async cadastrar() {
        let loading = await this.loadingController.create({ message: 'Cadastrando...' })
        loading.present()
        let body = `
            mutation {
                createCapim(
                    tipo: "${this.capim.tipo}"
                    alturaEntrada: ${this.capim.alturaEntrada}
                    alturaSaidaMaiorFert: ${this.capim.alturaSaidaMaiorFert}
                    alturaSaidaMenorFert: ${this.capim.alturaSaidaMenorFert}
                ){
                    id
                }
            }
        `
        let retorno = await this.api.post({ query: body })
        loading.dismiss()
        console.log('retorno ==> ', retorno);
        if (!retorno.error) {
            let toast = await this.toastController.create({ message: "Cadastro realizado com sucesso", duration: 3000 })
            toast.present()
            this.dimiss()
        } else {
            let toast = await this.toastController.create({ message: "Ocorreu um erro, tente novamente", duration: 3000 })
            toast.present()
        }

    }

    dimiss(){
        this.modalController.dismiss()
    }

}

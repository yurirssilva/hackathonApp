import { BancoService } from './../../../services/banco.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ModalController, AlertController, LoadingController, ToastController } from '@ionic/angular';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.page.html',
    styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
    usuario = {
        email: '',
        password: '',
        passwordConfirm: ''
    }
    constructor(
        public modalCtrl: ModalController,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public toastController: ToastController,
        private api: ApiService,
        private banco: BancoService,
    ) { }

    ngOnInit() {
    }

    async fechar() {
        this.modalCtrl.dismiss()
    }

    async cadastrar() {
        if (!this.usuario.email || !this.usuario.password || !this.usuario.passwordConfirm) {
            let alerta = await this.alertCtrl.create({ message: 'Entre com todos os dados' })
            alerta.present()
        } else if (this.usuario.password != this.usuario.passwordConfirm) {
            let alerta = await this.alertCtrl.create({ message: 'As senhas devem ser as mesmas.' })
            alerta.present()
        } else {
            let loading = await this.loadingCtrl.create({ message: "Cadastrando.." })
            loading.present()
            console.log("usuario ==> ", this.usuario);
            let body = `
                mutation{
                    createUser(email: "${this.usuario.email}", password: "${this.usuario.password}"){
                        userId
                        token
                        tokenExpiration
                    }
                }
            `
            let consulta = await this.api.post(body)
            loading.dismiss()
            if (!consulta.error) {
                let toast = await this.toastController.create({message: "Cadastro realizado com sucesso!", duration: 300})
                toast.present()
                this.fechar()
            } else {
                let toast = await this.toastController.create({message: "Ocorreu um erro, tente novamente", duration: 300})
                toast.present()
            }
            console.log("usuariosCadastrados ==> ", consulta);
            // let usuariosCadastrados = await this.banco.set('usuario', consulta)
        }

    }

    async salvaUsuario() {

    }

}

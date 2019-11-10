import { ApiService } from './../../../services/api.service';
import { CadastroPage } from './../cadastro/cadastro.page';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, LoadingController, ToastController } from '@ionic/angular';
import { BancoService } from 'src/app/services/banco.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    usuario = {
        email: '',
        password: ''
    }
    usuarioLogado = false
    constructor(
        private banco: BancoService,
        public alertCtrl: AlertController,
        public modalCtrl: ModalController,
        public loadingController: LoadingController,
        public toastController: ToastController,
        private api: ApiService
    ) { }

    async ngOnInit() {
        this.buscarUsuario()
    }

    async logar() {
        let loading = await this.loadingController.create({ message: "Logando..." })
        loading.present()
        let body = `
            query{
                login(email: "${this.usuario.email}", password: "${this.usuario.password}"){
                    userId
                    token
                    tokenExpiration
                }
            }
        `
        let consulta = await this.api.get(body)
        loading.dismiss()
        if (!consulta.error) {
            let toast = await this.toastController.create({ message: "Cadastro realizado com sucesso!", duration: 300 })
            toast.present()
            console.log('consulta ==> ', consulta);
    
            await this.banco.set('usuario', this.usuario)
            await this.banco.set('usuario-token', consulta.data.login)
            this.buscarUsuario()
        } else {
            let toast = await this.toastController.create({ message: "Ocorreu um erro, tente novamente", duration: 300 })
            toast.present()
        }
    }

    async sair() {
        let alerta = await this.alertCtrl.create({
            message: "Deseja sair?",
            buttons: [{
                text: "Não"
            }, {
                text: "Sim",
                handler: async () => {
                    await this.banco.remove('usuario')
                    await this.banco.remove('usuario-token')
                    this.buscarUsuario()
                }
            }]
        })
        alerta.present()
    }

    async buscarUsuario() {
        let usuario = await <any>this.banco.get('usuario')
        if (usuario) {
            this.usuario = usuario
            this.usuarioLogado = true
        } else {
            this.usuario = {
                email: '',
                password: ''
            }
            this.usuarioLogado = false
        }
    }

    async abrirCadastro() {
        let modal = await this.modalCtrl.create({
            component: CadastroPage,
            cssClass: 'modal-pequeno'
        })
        modal.present()
    }

}

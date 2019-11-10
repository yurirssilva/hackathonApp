import { CadastroPageModule } from './pages/usuario/cadastro/cadastro.module';
import { BuscaCapimPageModule } from './pages/area/capim/busca-capim/busca-capim.module';
import { CadastroCapimPageModule } from './pages/area/capim/cadastro-capim/cadastro-capim.module';
import { NovoLancamentoPageModule } from './pages/area/lancamentos/novo-lancamento/novo-lancamento.module';
import { DesenharMapaPageModule } from './pages/area/desenhar-mapa/desenhar-mapa.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AreaCadastroPageModule } from './pages/area/area-cadastro/area-cadastro.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        AreaCadastroPageModule,
        DesenharMapaPageModule,
        NovoLancamentoPageModule,
        CadastroCapimPageModule,
        BuscaCapimPageModule,
        CadastroPageModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

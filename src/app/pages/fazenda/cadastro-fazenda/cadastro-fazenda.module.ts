import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroFazendaPage } from './cadastro-fazenda.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroFazendaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroFazendaPage]
})
export class CadastroFazendaPageModule {}

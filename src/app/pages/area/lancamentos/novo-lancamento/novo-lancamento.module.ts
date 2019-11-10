import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NovoLancamentoPage } from './novo-lancamento.page';

const routes: Routes = [
  {
    path: '',
    component: NovoLancamentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NovoLancamentoPage]
})
export class NovoLancamentoPageModule {}

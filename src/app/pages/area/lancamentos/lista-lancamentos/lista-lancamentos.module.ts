import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaLancamentosPage } from './lista-lancamentos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaLancamentosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaLancamentosPage]
})
export class ListaLancamentosPageModule {}

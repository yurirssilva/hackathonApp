import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BuscaCapimPage } from './busca-capim.page';

const routes: Routes = [
  {
    path: '',
    component: BuscaCapimPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BuscaCapimPage]
})
export class BuscaCapimPageModule {}

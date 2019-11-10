import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DesenharMapaPage } from './desenhar-mapa.page';

const routes: Routes = [
  {
    path: '',
    component: DesenharMapaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DesenharMapaPage]
})
export class DesenharMapaPageModule {}

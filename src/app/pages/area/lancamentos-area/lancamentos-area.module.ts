import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LancamentosAreaPage } from './lancamentos-area.page';

const routes: Routes = [
  {
    path: '',
    component: LancamentosAreaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LancamentosAreaPage]
})
export class LancamentosAreaPageModule {}

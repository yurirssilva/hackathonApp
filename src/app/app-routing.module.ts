import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'usuario/login', loadChildren: './pages/usuario/login/login.module#LoginPageModule' },
  { path: 'usuario/cadastro', loadChildren: './pages/usuario/cadastro/cadastro.module#CadastroPageModule' },
  { path: 'area/lista', loadChildren: './pages/area/lista/lista.module#ListaPageModule' },
  { path: 'area/area-cadastro', loadChildren: './pages/area/area-cadastro/area-cadastro.module#AreaCadastroPageModule' },
  { path: 'desenhar-mapa', loadChildren: './pages/area/desenhar-mapa/desenhar-mapa.module#DesenharMapaPageModule' },
  { path: 'lancamentos-area', loadChildren: './pages/area/lancamentos-area/lancamentos-area.module#LancamentosAreaPageModule' },
  { path: 'lista-lancamentos', loadChildren: './pages/area/lancamentos/lista-lancamentos/lista-lancamentos.module#ListaLancamentosPageModule' },
  { path: 'novo-lancamento', loadChildren: './pages/area/lancamentos/novo-lancamento/novo-lancamento.module#NovoLancamentoPageModule' },
  { path: 'selecionar-ponto', loadChildren: './pages/area/lancamentos/selecionar-ponto/selecionar-ponto.module#SelecionarPontoPageModule' },
  { path: 'buscar-areas', loadChildren: './pages/area/buscar-areas/buscar-areas.module#BuscarAreasPageModule' },
  { path: 'cadastro-capim', loadChildren: './pages/area/capim/cadastro-capim/cadastro-capim.module#CadastroCapimPageModule' },
  { path: 'busca-capim', loadChildren: './pages/area/capim/busca-capim/busca-capim.module#BuscaCapimPageModule' },
  { path: 'lista-fazenda', loadChildren: './pages/fazenda/lista-fazenda/lista-fazenda.module#ListaFazendaPageModule' },
  { path: 'cadastro-fazenda', loadChildren: './pages/fazenda/cadastro-fazenda/cadastro-fazenda.module#CadastroFazendaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'produtos',
    loadComponent: () =>
      import('./pages/produtos/produtos.component').then((m) => m.ProdutosComponent),
  }
  ,
  {
    path: 'contato',
    loadComponent: () =>
      import('./pages/contato/contato.component').then((m) => m.ContatoComponent),
  },
  {
    path: 'carrinho',
    loadComponent: () =>
      import('./pages/carrinho/carrinho.component').then((m) => m.CarrinhoComponent),
  }
]
import { loadRemoteModule } from '@nx/angular/mf';
import { Route } from '@angular/router';
import { ContatoComponent } from '../pages/contato/contato.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadChildren: () =>
      loadRemoteModule('user-app', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'contato',
    component: ContatoComponent,
  },
  {
    path: 'administracao',
    loadChildren: () =>
      loadRemoteModule('adm-app', './Routes').then((m) => m.remoteRoutes),
  },
    { path: '**', redirectTo: '/inicio' }
];

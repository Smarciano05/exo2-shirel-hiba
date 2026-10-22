import { Routes } from '@angular/router';
import { Acceuil } from './acceuil/acceuil';
import { Liste } from './liste/liste';
import { Contact } from './contact/contact';
import { Gestion } from './gestion/gestion';

export const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: Acceuil },
  { path: 'liste', component: Liste },
  { path: 'contact', component: Contact },
  { path: 'gestion', component: Gestion },
  { path: '**', redirectTo: 'accueil' },
];

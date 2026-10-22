import { Component } from '@angular/core';

@Component({
  selector: 'app-liste',
  imports: [],
  templateUrl: './liste.html',
  styleUrl: './liste.css',
})
export class Liste {
  films = [
    { titre: 'Inception', affiche: '/inception.jpg' },
    { titre: 'Interstellar', affiche: '/interstellar.jpg' },
    { titre: 'Le Voyage de Chihiro', affiche: '/chihiro.jpg' },
    { titre: 'Le Fabuleux Destin d’Amélie Poulain', affiche: '/amelie.jpg' },
    { titre: 'The Grand Budapest Hotel', affiche: '/budapest.jpg' },
  ];

  filmChoisi: { titre: string; affiche: string } | null = null;

  choisir(film: { titre: string; affiche: string }) {
    this.filmChoisi = film;
  }
}

import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactStore } from '../services/contact-store';
import { ContactData } from '../models/contact-data';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private router = inject(Router);
  private store = inject(ContactStore);

  formulaire = new FormGroup({
    prenom: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    age: new FormControl<number | null>(null),
    hide: new FormControl(false),
    email: new FormControl('', [Validators.required, Validators.pattern(/@/)]),
    commentaire: new FormControl('', Validators.required),
  });

  constructor() {
    // à chaque changement de la checkbox Hide
    this.formulaire.controls.hide.valueChanges.subscribe((hide) => {
      const email = this.formulaire.controls.email;
      if (hide) {
        email.reset('');  // on vide l'email
        email.disable();  // champ désactivé = plus requis
      } else {
        email.enable();   // champ de nouveau requis
      }
    });
  }

  // vrai si le champ est invalide et que l'utilisateur l'a touché
  invalide(nom: 'prenom' | 'nom' | 'email' | 'commentaire'): boolean {
    const champ = this.formulaire.controls[nom];
    return champ.invalid && (champ.dirty || champ.touched);
  }

  envoyer() {
    if (this.formulaire.invalid) {
      return;
    }

    const valeurs = this.formulaire.getRawValue();
    const contact: ContactData = {
      prenom: valeurs.prenom ?? '',
      nom: valeurs.nom ?? '',
      age: valeurs.age ?? null,
      hide: valeurs.hide ?? false,
      email: valeurs.email ?? '',
      commentaire: valeurs.commentaire ?? '',
    };

    this.store.enregistrer(contact);
    alert('Le formulaire est valide');
    this.router.navigateByUrl('/accueil');
  }
}

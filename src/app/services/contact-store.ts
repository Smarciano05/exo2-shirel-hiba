import { Injectable } from '@angular/core';
import { ContactData } from '../models/contact-data';

@Injectable({
  providedIn: 'root',
})
export class ContactStore {
  // null = aucun formulaire envoyé
  dernierContact: ContactData | null = null;

  // le nouveau formulaire écrase l'ancien
  enregistrer(contact: ContactData) {
    this.dernierContact = contact;
  }
}

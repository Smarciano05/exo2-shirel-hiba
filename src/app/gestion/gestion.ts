import { Component, inject } from '@angular/core';
import { ContactStore } from '../services/contact-store';

@Component({
  selector: 'app-gestion',
  imports: [],
  templateUrl: './gestion.html',
  styleUrl: './gestion.css',
})
export class Gestion {
  store = inject(ContactStore);
}

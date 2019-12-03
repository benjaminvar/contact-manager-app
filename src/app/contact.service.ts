import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from "./contact"
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[] = [];
  constructor() { }
  getContacts(): Observable<Contact[]>
  {
    return of(this.contacts);
  }
  addContact(contact: Contact): void
  {
    this.contacts.push(contact);
  }
  updateContact(oldContact: Contact, updatedContact): void
  {
    let index = this.contacts.indexOf(oldContact);
    this.contacts[index] = updatedContact;
  }
  deleteContact(contact: Contact): void
  {
    let index = this.contacts.indexOf(contact);
    this.contacts.splice(index,1);
  }
}

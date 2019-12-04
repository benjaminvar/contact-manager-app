import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Contact } from "./contact"

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[] = [];
  private isFetched: boolean = false;
  constructor() { }
  private fetchRandomContacts(numberOfContacts: number)
  {
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(contacts => {
      let contactsArr: Contact[] = contacts.map(contact => new Contact(contact.name,contact.email,contact.phone))
      for(let i = 0; i < numberOfContacts; i++)
      {
        //Get random index of contact from list of fetched contacts 
        let randomIndex = Math.floor(Math.random() * (contactsArr.length - 1) );
        //remove contact from the list of fetch contact and inserted into the contact list
        let selectedContact= contactsArr.splice(randomIndex,1) ;
       this.contacts.push(...selectedContact);
       
      }
      this.contacts = contactsArr;
      return this.contacts;
    })

  }
  getContacts(): Observable<Contact[]>
  {
    if(!this.isFetched)
    {
      this.isFetched = true;
      return from(this.fetchRandomContacts(5));
    }
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

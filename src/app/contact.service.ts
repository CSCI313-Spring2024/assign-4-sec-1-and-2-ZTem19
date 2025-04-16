import { Injectable } from '@angular/core';
import { contacts } from './data';
import { Contact } from './contact';
import { first, last } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}
  contactCounter = contacts.length;

  getContacts(): Contact[] {
    return contacts;
  }

  addContact(
    fname: string,
    lname: string,
    number: string,
    emailAdr: string
  ): void {
    contacts.push({
      id: this.contactCounter++,
      fname,
      lname,
      number,
      emailAdr,
    });
    console.log(
      `Pushed new contact: ${fname}, ${lname}, ${number}, ${emailAdr}`
    );
  }

  deleteContact(id: number): void {
    let index: number = -1;
    for (let i: number = 0; i < contacts.length; i++) {
      if (contacts[i].id == id) {
        index = i;
        break;
      }
    }
    if (index == -1) {
      return;
    }
    console.log(`Deleted contact: ${contacts[index].fname}`);
    contacts.splice(index, 1);
  }

  getContactById(id: number): Contact {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].id == id) {
        return contacts[i];
      }
    }
    console.error('No contact for the given id');
    return {
      id: -1,
      fname: 'firstname',
      lname: 'lastname',
      number: '0000000000',
      emailAdr: 'john.doe@gmail.com',
    };
  }

  saveContact(
    id: number,
    firstname: string,
    lastname: string,
    phoneNum: string,
    emailAdr: string
  ): void {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].id == id) {
        (contacts[i].fname = firstname),
          (contacts[i].lname = lastname),
          (contacts[i].number = phoneNum);
        contacts[i].emailAdr = emailAdr;
        break;
      }
    }
  }

  //Used for debugging
  private printAll(): void {
    for (let i = 0; i < contacts.length; i++) {
      console.log(contacts[i]);
    }
  }
}

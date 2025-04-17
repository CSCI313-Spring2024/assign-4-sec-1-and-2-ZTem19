import { Component, inject, NgModule } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-add-contact',
  imports: [],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css',
})
export class AddContactComponent {
  contactService = inject(ContactService);
  router = inject(Router);

  addContact(fname: string, lname: string, phoneNum: string, emailAdr: string) {
    this.contactService.addContact(
      fname.trim(),
      lname.trim(),
      phoneNum,
      emailAdr
    );
    this.router.navigate(['']);
  }
}

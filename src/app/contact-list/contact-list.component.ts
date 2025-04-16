import {
  Component,
  inject,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  imports: [RouterLink],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
})
export class ContactListComponent implements OnInit {
  dataService = inject(ContactService);
  contacts: Contact[] = [];

  ngOnInit() {
    console.log('ngOnInit');
    this.contacts = this.dataService.getContacts();
  }

  delete(id: number) {
    this.dataService.deleteContact(id);
  }
}

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
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  imports: [RouterLink, FormsModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
})
export class ContactListComponent implements OnInit {
  dataService = inject(ContactService);

  contacts: Contact[] = [];

  ngOnInit() {
    console.log('ngOnInit');
    this.dataService
      .getContacts()
      .subscribe((contacts) => (this.contacts = contacts));
  }

  filterContacts(searchName: string) {
    this.dataService
      .getContacts()
      .pipe(
        map((contacts: Contact[]) =>
          contacts.filter((contact) =>
            contact.fname
              .concat(' ', contact.lname)
              .toLowerCase()
              .includes(searchName.toLowerCase())
          )
        )
      )
      .subscribe((contacts) => (this.contacts = contacts));
  }

  delete(id: number) {
    this.dataService.deleteContact(id);
  }
}

import { Component, inject, Input, OnChanges, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit',
  imports: [FormsModule, RouterLink],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnChanges {
  dataService = inject(ContactService);
  router = inject(Router);
  errorMsg: string = '';

  @Input() id?: number;
  contact?: Contact;

  ngOnChanges() {
    if (this.id) {
      this.contact = this.dataService.getContactById(this.id);
      console.log('Id: ' + this.id);
      console.log(this.contact);
    }
  }

  save(
    firstname: string,
    lastname: string,
    phoneNum: string,
    emailAdr: string
  ) {
    if (this.contact == null) {
      console.log('Id is null!!!! Big issues');
    } else {
      this.dataService.saveContact(
        this.contact.id,
        firstname,
        lastname,
        phoneNum,
        emailAdr
      );
      this.router.navigate(['']);
    }
  }
}

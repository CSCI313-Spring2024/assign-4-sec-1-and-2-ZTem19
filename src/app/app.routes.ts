import { Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Contacts',
    component: ContactListComponent,
  },
  {
    path: 'add-contact',
    component: AddContactComponent,
  },
  {
    path: 'edit/:id',
    component: EditComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

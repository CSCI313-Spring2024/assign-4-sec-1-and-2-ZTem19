import { Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditComponent } from './edit/edit.component';
import { AppComponent } from './app.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Contacts',
    component: AddContactComponent,
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

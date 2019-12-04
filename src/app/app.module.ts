import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { ContactAddFormComponent } from './contact-add-form/contact-add-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactService } from "./contact.service";
import { ContactEditFormComponent } from './contact-edit-form/contact-edit-form.component'

@NgModule({
  declarations: [
    AppComponent,
    ContactAddFormComponent,
    ContactEditFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
  entryComponents:[
    ContactAddFormComponent,
    ContactEditFormComponent
  ]
})
export class AppModule { }

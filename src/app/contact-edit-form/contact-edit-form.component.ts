import { Component, Inject, OnInit } from '@angular/core';
import { Contact } from "../contact"
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-contact-edit-form',
  templateUrl: './contact-edit-form.component.html',
  styleUrls: ['./contact-edit-form.component.css']
})
export class ContactEditFormComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  });
  constructor(public dialogRef: MatDialogRef<ContactEditFormComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.contactForm.get('name').setValue(this.data.name);
    this.contactForm.get('email').setValue(this.data.email);
    this.contactForm.get('phone').setValue(this.data.phone);
  }
  update()
  {
    this.dialogRef.close({oldContact: this.data, updatedContact: this.contactForm.value});
  }
  close()
  {
    this.dialogRef.close();
  }
}

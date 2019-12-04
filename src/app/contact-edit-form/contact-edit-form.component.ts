import { Component, Inject, OnInit } from '@angular/core';
import { Contact } from "../contact"
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact-edit-form',
  templateUrl: './contact-edit-form.component.html',
  styleUrls: ['./contact-edit-form.component.css']
})
export class ContactEditFormComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    phone: new FormControl('',[Validators.required, Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)]),
  });
  constructor(public dialogRef: MatDialogRef<ContactEditFormComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Contact) { }

  ngOnInit():void {
    this.contactForm.get('name').setValue(this.data.name);
    this.contactForm.get('email').setValue(this.data.email);
    this.contactForm.get('phone').setValue(this.data.phone);
  }
  update():void
  {
    this.dialogRef.close({oldContact: this.data, updatedContact: this.contactForm.value});
  }
  close():void
  {
    this.dialogRef.close();
  }
}

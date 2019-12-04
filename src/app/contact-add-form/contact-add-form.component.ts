import { Component, Inject , OnInit } from '@angular/core';
import { Contact } from "../contact"
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact-add-form',
  templateUrl: './contact-add-form.component.html',
  styleUrls: ['./contact-add-form.component.css']
})
export class ContactAddFormComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    phone: new FormControl('',[Validators.required, Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)]),
  });
  constructor(public dialogRef: MatDialogRef<ContactAddFormComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Contact) { }
  ngOnInit() {
  }
  add():void
  {
    this.dialogRef.close(this.contactForm.value);
  }
  close():void
  {
    this.dialogRef.close();
  }
}

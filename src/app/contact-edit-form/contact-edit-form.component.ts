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
  }
  update()
  {
    this.dialogRef.close(this.contactForm.value);
  }
  close()
  {
    this.dialogRef.close();
  }
}

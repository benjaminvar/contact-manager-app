import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ContactAddFormComponent } from './contact-add-form/contact-add-form.component';

export interface PeriodicElement {
  name: string;
  email: string;
  phone: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Hydrogen', email: 'Hydrogen', phone: 'H'},
  { name: 'Helium', email: 'Helium', phone: 'He'},
  { name: 'Lithium', email: 'Lithium', phone: 'Li'},
  { name: 'Beryllium', email: 'Beryllium', phone: 'Be'},
  { name: 'Boron', email:'Boron', phone: 'B'},
  { name: 'Carbon', email: 'Carbon', phone: 'C'},
  { name: 'Nitrogen', email: 'Nitrogen', phone: 'N'},
  { name: 'Oxygen', email: 'Oxygen', phone: 'O'},
  { name: 'Fluorine', email: 'Fluorine', phone: 'F'},
  { name: 'Neon', email: 'Neon', phone: 'Ne' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['name' ,'email','phone', 'actions'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) {}
  showContactAddDialog()
  {
    const dialogRef = this.dialog.open(ContactAddFormComponent, {
    
    });

    dialogRef.afterClosed().subscribe(result => {
     console.log(result);
    });
  }
}

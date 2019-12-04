import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ContactAddFormComponent } from './contact-add-form/contact-add-form.component';
import {MatTableDataSource} from "@angular/material"
import { ContactService } from './contact.service';
import { Contact } from './contact';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['name' ,'email','phone', 'actions'];
  dataSource = new MatTableDataSource();
  constructor(public dialog: MatDialog, public contactService: ContactService) {}
  ngOnInit()
  {
   this.loadData();
  }
  loadData()
  {
    this.contactService.getContacts().subscribe(data => {
      this.dataSource.data = data;
  }); 
  }
  showContactAddDialog()
  {
    const dialogRef = this.dialog.open(ContactAddFormComponent, {
    
    });

    dialogRef.afterClosed().subscribe(result => {
     if(result)
     {
       this.contactService.addContact(result);
       this.loadData();
     }
    });
  }
  deleteContact(contact: Contact): void
  {
    this.contactService.deleteContact(contact);
    this.loadData();
  }
}

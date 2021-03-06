import { Component, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ContactAddFormComponent } from './contact-add-form/contact-add-form.component';
import {MatTableDataSource, MatPaginator} from "@angular/material"
import { ContactService } from './contact.service';
import { Contact } from './contact';
import { ContactEditFormComponent } from './contact-edit-form/contact-edit-form.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['name' ,'email','phone', 'actions'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  constructor(public dialog: MatDialog, public contactService: ContactService) {}
  ngOnInit(): void
  {
   this.loadData();
  }
  ngAfterViewInit():void {
    this.dataSource.paginator = this.paginator;
    }
  loadData(): void
  {
    this.contactService.getContacts().subscribe(data => {
    this.dataSource.data = data;
  }); 
  }
  showContactAddDialog(): void
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
  showContactEditDialog(contact: Contact): void
  {
    const dialogRef = this.dialog.open(ContactEditFormComponent, {
      data: contact
    });

    dialogRef.afterClosed().subscribe(result => {
     if(result)
     {
       let {oldContact, updatedContact} = result;
       this.contactService.updateContact(oldContact, updatedContact);
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

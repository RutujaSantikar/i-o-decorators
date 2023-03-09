import { Component } from '@angular/core';
import { ChildDialogComponent } from '../child-dialog/child-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.scss']
})
export class Parent2Component {

  header:string = 'hello Header from parent2';
  message:string = 'hello Message from parent2';
  button = 'hello Button from parent2';


    myProps = { header: this.header, message: this.message, button: this.button }
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
 this.dialog.open(ChildDialogComponent)
}


}

import { Component } from '@angular/core';
import { ChildDialogComponent } from '../child-dialog/child-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss']
})
export class Parent1Component {
  constructor(public dialog: MatDialog) {}

  showChild=false;


   header:string = 'hello Header';
   message:string = 'hello Message';
   button = 'hello Button';

  //  myProps = { header: this.header, message: this.message, button: this.button }

  myProps = { header: 'hello header', message: 'hello message', button: 'hello button' }
  propsArray=[1,2,3,4,5,6,7,8,9,10];
  myHeader='hello i am header from child'

  openDialog() {
    this.dialog.open(ChildDialogComponent);
  }

   onClick(){

      this.showChild =true;

   }
}

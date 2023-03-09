import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'decorators';
  public price:any;
  title1 = 'AngApp';
  parent = 10;
  parentCount=0;
  enterName ='';
  parentData='';
  myInputMessage:string="I am parent component";

  GetChildData(data:string){
    console.log(data);
  }
  onChange(value:any){
    this.price=value;
  }

   displayCounter(count:any){
    this.parentCount=count;
   }

   passtochild(){
    this.parentData=this.enterName;
   }

   




}

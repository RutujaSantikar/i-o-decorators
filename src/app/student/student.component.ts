import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  //  to transfer data from parent to child
  @Input() myinputMsg!: string;
  @Input() public parentData!: string;

  // to transfer data from child to parent
  @Output() myOutputMsg: EventEmitter<string> = new EventEmitter();
  @Output() public newPrice = new EventEmitter<any>();
  @Output() valueChange = new EventEmitter<any>();

  outputMessage: string = 'I am child component';
  public price: any;
  counter = 0;

  constructor() {}

  ngOnInit(): void {
    console.log(this.myinputMsg);
  }

  sendValues() {
    this.myOutputMsg.emit(this.outputMessage);
  }

  onChange(value: any) {
    this.newPrice.emit(value);
  }

  valueChanged() {
    this.counter += 1;
    this.valueChange.emit(this.counter);
  }
}

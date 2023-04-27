import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-dialog',
  templateUrl: './child-dialog.component.html',
  styleUrls: ['./child-dialog.component.scss'],
})
export class ChildDialogComponent {
  @Input() header1!: string;
  @Input() message1!: string;
  @Input() button1!: string;
  @Input() props!: { header: string; message: string; button: string };
  @Input() props2!: any;
  @Input() props3!: string;
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'recipient-label',
  templateUrl: './recipient-label.component.html',
  styleUrls: ['./recipient-label.component.css']
})
export class RecipientLabelComponent implements OnInit {

  @Input('receipt') public receipt;

  constructor() { }

  ngOnInit(): void {
  }

}

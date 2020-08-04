import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'remitter-text',
  templateUrl: './remitter-text.component.html',
  styleUrls: ['./remitter-text.component.css']
})
export class RemitterTextComponent implements OnInit {

  @Output() public remittance = new EventEmitter();

  @Input('text') public text;

  constructor() { }

  ngOnInit(): void {
  }

  callEvent() {
    //console.log(this.text)
    this.remittance.emit(this.text);
  }

}

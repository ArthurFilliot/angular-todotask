import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'transmitter-button',  
  templateUrl: './transmitter-button.component.html',  
  styleUrls: ['./transmitter-button.component.css']
})
export class TransmitterButtonComponent implements OnInit {

  @Input('data') public data;

  @Output() public transmit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  callEvent() {
    console.log("transmitter-button, data : "+this.data)
    this.transmit.emit(this.data);
  }

}

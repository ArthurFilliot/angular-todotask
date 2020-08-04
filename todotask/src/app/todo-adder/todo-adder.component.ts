import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-adder',
  templateUrl: './todo-adder.component.html', 
  styleUrls: ['./todo-adder.component.css']
})
export class TodoAdderComponent implements OnInit,AfterViewInit {

  currentvalue: string;

  @ViewChild('introduction') introduction: ElementRef;  

  @Output() public add = new EventEmitter();

  constructor() { }

  ngAfterViewInit(): void {
    this.introduction.nativeElement.innerHTML='Use it to add yout TO-DO List and remove it once it done'
  }

  ngOnInit(): void {
    
  }

  callEvent() {
    console.log("todo-adder, currentvalue : "+this.currentvalue)
    this.add.emit(this.currentvalue)
    this.currentvalue=""
  }

}

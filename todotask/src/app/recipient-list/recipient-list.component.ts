import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'recipient-list',
  templateUrl: './recipient-list.component.html',
  styleUrls: ['./recipient-list.component.css']
})
export class RecipientListComponent implements OnInit {

  @Input('tasks') public tasks;

  constructor() { }

  ngOnInit(): void {
  }

}

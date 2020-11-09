import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quote';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
  @Input() quote: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);

  }
  constructor() { }

  ngOnInit(): void {
  }

}

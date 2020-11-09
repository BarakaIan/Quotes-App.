import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quote';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

  newQuote = new Quotes(0,"","","",new Date());
  @Output() addQuote = new EventEmitter<Quotes>();
  submitQuoteContact(){
    this.addQuote.emit(this.newQuote);
      }
  // submitQuoteContacts(){
  //   this.addQuote.emit(this.newQuote)
  // }
  // newQuote = new Quotes(0,"","","",new Date());
  constructor() { }


  ngOnInit(): void {
  }

}

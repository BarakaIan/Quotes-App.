import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, '“Fake It Until You Make It! Act As If You Had All The Confidence You Require Until It Becomes Your Reality.”','Author name: Brian Tracy',"Franko",new Date(2000,3,14)),
    new Quotes(2, 'Dream it',  'Author name: Keriako Tobiko',"Franky", new Date(2019-10-23)),
    new Quotes(3, 'Dream big', 'Author name: Gladys Dwayne',"Ian", new Date(2020-10-13)),

  ]
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}

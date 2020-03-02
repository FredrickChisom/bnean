import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-description-deck',
  templateUrl: './card-description-deck.component.html',
  styleUrls: ['./card-description-deck.component.scss']
})
export class CardDescriptionDeckComponent implements OnInit {
  items: Array<string> = ['', '', '', '', '', '', '', '', '', '', '', '']


  constructor() { }
  //give unique id to ngfor output
  trackByFn(index, item) {
    return item.id
  }


  ngOnInit() {
  }

}

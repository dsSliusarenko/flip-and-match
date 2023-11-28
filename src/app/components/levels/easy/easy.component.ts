import {Component, OnInit} from '@angular/core';
import {Card} from "../card";

@Component({
  selector: 'fam-easy',
  templateUrl: './easy.component.html',
  styleUrls: ['./easy.component.scss']
})
export class EasyComponent implements OnInit {
  demoCards: Card[] = [
    {
      icon: 'test'
    },{
      icon: 'test'
    },{
      icon: 'test'
    },{
      icon: 'test'
    },{
      icon: 'test'
    },{
      icon: 'test'
    },{
      icon: 'test'
    },{
      icon: 'test'
    },{
      icon: 'test'
    },{
      icon: 'test'
    },{
      icon: 'test'
    },{
      icon: 'test'
    }, {
      icon: 'test'
    },{
      icon: 'test'
    },{
      icon: 'test'
    },{
      icon: 'test'
    }
  ]

  showCards!: Card[];

  ngOnInit() {


  }

}

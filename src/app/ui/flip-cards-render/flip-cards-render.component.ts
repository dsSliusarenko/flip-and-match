import {Component, Input, OnInit} from '@angular/core';
import {AnimationType} from "./flip-cards";

@Component({
  selector: 'fam-flip-cards-render',
  templateUrl: './flip-cards-render.component.html',
  styleUrls: ['./flip-cards-render.component.scss']
})
export class FlipCardsRenderComponent implements OnInit{
  @Input() inputText!: string ;
  @Input() animationType!: AnimationType;

  textToRender!: string[]

  ngOnInit() {
    this.textToRender = this.inputText.split('');
  }
}

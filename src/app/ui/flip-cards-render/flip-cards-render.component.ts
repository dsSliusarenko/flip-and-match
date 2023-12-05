import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {AnimationType} from './flip-cards';

@Component({
  selector: 'fam-flip-cards-render',
  templateUrl: './flip-cards-render.component.html',
  styleUrls: ['./flip-cards-render.component.scss'],
})
export class FlipCardsRenderComponent implements OnInit, AfterViewInit {
  @Input() inputText!: string;
  @Input() animationType!: AnimationType;

  textToRender!: string[];
  flipSquares!: NodeListOf<Element>;
  isFlipped: boolean = false;

  ngOnInit() {
    this.textToRender = this.inputText.split('');
  }

  ngAfterViewInit() {
    this.flipSquares = document.querySelectorAll('.flip-square');
    this.animationType === AnimationType.LOGO ? this.startLogoAnimation() : this.startEndGameScreenAnimation();
  }

  startLogoAnimation(): void {
    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * this.flipSquares.length);
      const randomSquare: HTMLElement = this.flipSquares[randomIndex] as HTMLElement;

      randomSquare.classList.add('selected');
      setTimeout(() => {
        randomSquare.classList.remove('selected');
      }, 1000);
    }, 2000);
  }

  startEndGameScreenAnimation(): void {
    let index = 0;
    setInterval(() => {
      const currentSquare: HTMLElement = this.flipSquares[index] as HTMLElement;
      currentSquare.classList.add('selected');
      setTimeout(() => {
        currentSquare.classList.remove('selected');
      }, 200);

      index = (index + 1) % this.flipSquares.length;
    }, 200);
  }
}

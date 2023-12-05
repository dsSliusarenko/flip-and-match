import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AnimationType} from './flip-cards';
import {GameStatusService} from "../../services/game-status.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'fam-flip-cards-render',
  templateUrl: './flip-cards-render.component.html',
  styleUrls: ['./flip-cards-render.component.scss'],
})
export class FlipCardsRenderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() inputText!: string;
  @Input() animationType!: AnimationType;

  textToRender!: string[];
  flipSquares!: NodeListOf<Element>;
  isFlipped: boolean = false;

  logoIntervalId!: number;
  endGameIntervalId!: number;

  subscriptions: Subscription = new Subscription();

  constructor(private gameStatusService: GameStatusService) {
  }

  ngOnInit() {
    this.textToRender = this.inputText.split('');

    this.subscriptions.add(
      this.gameStatusService.isGameStartedState.subscribe(value => {
        if (value) {
          this.stopAnimation();
        } else {
          this.initAnimation();
        }
      })
    )
  }

  ngAfterViewInit(): void {
    this.flipSquares = document.querySelectorAll('.flip-square');
  }

  initAnimation(): void {
    if (this.animationType === AnimationType.LOGO) {
      this.logoIntervalId = this.startLogoAnimation();
    } else {
      this.endGameIntervalId = this.startEndGameScreenAnimation();
    }
  }

  startLogoAnimation(): number {
    return setInterval(() => {
      const randomIndex = Math.floor(Math.random() * this.flipSquares.length);
      const randomSquare: HTMLElement = this.flipSquares[randomIndex] as HTMLElement;

      randomSquare.classList.add('selected');
      setTimeout(() => {
        randomSquare.classList.remove('selected');
      }, 1000);
    }, 2000);
  }

  startEndGameScreenAnimation(): number {
    let index = 0;
    return setInterval(() => {
      const currentSquare: HTMLElement = this.flipSquares[index] as HTMLElement;
      currentSquare.classList.add('selected');
      setTimeout(() => {
        currentSquare.classList.remove('selected');
      }, 200);

      index = (index + 1) % this.flipSquares.length;
    }, 200);
  }

  stopAnimation(): void {
    clearInterval(this.animationType === AnimationType.LOGO ? this.logoIntervalId : this.endGameIntervalId);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

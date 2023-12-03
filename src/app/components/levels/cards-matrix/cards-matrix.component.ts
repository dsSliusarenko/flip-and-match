import {Component, Input, OnInit} from '@angular/core';
import {Deck} from "../../home/home";
import {Card, Levels} from "../levels";
import {Observable, Subject, takeUntil, timer} from 'rxjs';

@Component({
  selector: 'fam-cards-matrix',
  templateUrl: './cards-matrix.component.html',
  styleUrls: ['./cards-matrix.component.scss']
})
export class CardsMatrixComponent implements OnInit {
  @Input() level!: Levels;

  protected readonly Deck = Deck;

  rxjsTimer: Observable<number> = timer(1000, 1000);
  destroy: Subject<any> = new Subject();
  timer: number = 0;

  selectedDeck!: Deck;
  pairsAmount!: number;
  cardsToShow: Card[] = [];

  ngOnInit() {
    this.setDifficultyLevel();
    this.setDeck();
    this.initCards();
    this.initTimer();
  }

  setDifficultyLevel(): void {
    switch (this.level) {
      case Levels.EASY:
        this.pairsAmount = 8;
        break;
      case Levels.MEDIUM:
        this.pairsAmount = 18;
        break;
      case Levels.HARD:
        this.pairsAmount = 32;
        break;
    }
  }

  setDeck(): void {
    this.selectedDeck = localStorage.getItem('selectedDeck') === Deck.NUMBERS ? Deck.NUMBERS : Deck.ICONS;
  }

  initCards(): void {
    const numbers: number[] = Array.from({length: this.pairsAmount}, (_, index) => index + 1);
    const pairs: number[] = numbers.concat(numbers).sort(() => Math.random() - 0.5);

    this.cardsToShow = pairs.map((value, index) => ({
      id: index,
      value: value,
      show: false
    }));
  }

  initTimer(): void {
    this.rxjsTimer.pipe(takeUntil(this.destroy)).subscribe(time => {
      this.timer = time;
    })
  }

  turnOver(card: Card): void {
    card.show = !card.show;
    const revealedCards: Card[] = this.cardsToShow.filter((card: Card) => card.show && !card.matched);

    if (revealedCards.length === 2) {
      if (revealedCards[0].value === revealedCards[1].value) {
        revealedCards.forEach((card: Card) => card.matched = true);
      } else {
        setTimeout(() => {
          revealedCards.forEach((card: Card) => card.show = false);
        }, 1000);
      }
    }

    if (this.areAllCardsTurned()) {
      this.makeScoreRecord();
    }
  }

  areAllCardsTurned(): boolean {
    return this.cardsToShow.every((card: Card) => card.show);
  }

  makeScoreRecord(): void {
    console.log('done')
  }
}

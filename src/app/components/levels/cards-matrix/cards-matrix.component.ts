import {Component, Input, OnInit} from '@angular/core';
import {Deck} from "../../home/home";
import {Card} from "../card";
import {Observable, Subject, takeUntil, timer} from 'rxjs';

@Component({
  selector: 'fam-cards-matrix',
  templateUrl: './cards-matrix.component.html',
  styleUrls: ['./cards-matrix.component.scss']
})
export class CardsMatrixComponent implements OnInit {
  @Input() pairsAmount!: number;

  protected readonly Deck = Deck;

  rxjsTimer: Observable<number> = timer(1000, 1000);
  destroy: Subject<any> = new Subject();
  timer: number = 0;

  selectedDeck!: Deck;
  cardsToShow: Card[] = [];

  ngOnInit() {
    this.setDeck();
    this.initCards();
    this.initTimer();
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

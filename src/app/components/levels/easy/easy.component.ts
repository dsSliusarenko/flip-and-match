import {Component, OnInit} from '@angular/core';
import {Card} from "../card";
import {Observable, Subject, takeUntil, timer} from 'rxjs';
import {Deck} from "../../home/home";

@Component({
  selector: 'fam-easy',
  templateUrl: './easy.component.html',
  styleUrls: ['./easy.component.scss']
})
export class EasyComponent implements OnInit {
  protected readonly Deck = Deck;

  rxjsTimer: Observable<number> = timer(1000, 1000);
  destroy: Subject<any> = new Subject();
  timer: number = 0;

  selectedDeck!: Deck;
  cardsAmount: number = 4;
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
    const numbers: number[] = Array.from({length: this.cardsAmount}, (_, index) => index + 1);
    const pairs: number[] = numbers.concat(numbers).sort(() => Math.random() - 0.5);

    this.cardsToShow = pairs.map((value, index) => ({
      id: index,
      value: value,
      show: false
    }));
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
  }

  initTimer(): void {
    this.rxjsTimer.pipe(takeUntil(this.destroy)).subscribe(time => {
      this.timer = time;
    })
  }
}

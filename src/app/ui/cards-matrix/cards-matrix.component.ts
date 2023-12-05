import {Component, Input, OnInit} from '@angular/core';
import {Deck} from "../../components/home/home";
import {Card, IconsArray, Levels} from "../../components/levels/levels";
import {Observable, Subject, takeUntil, timer} from 'rxjs';
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'fam-cards-matrix',
  templateUrl: './cards-matrix.component.html',
  styleUrls: ['./cards-matrix.component.scss']
})
export class CardsMatrixComponent implements OnInit {
  @Input() level!: Levels;

  protected readonly Deck = Deck;
  protected readonly Levels = Levels;

  rxjsTimer: Observable<number> = timer(1000, 1000);
  destroy: Subject<any> = new Subject();
  timer: number = 0;

  selectedDeck!: any;
  pairsAmount!: number;
  cardsToShow: any[] = [];
  icons: string[] = IconsArray;

  constructor(private router: Router) {
  }

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
    const savedDeck = localStorage.getItem('selectedDeck');
    this.selectedDeck = savedDeck ? JSON.parse(savedDeck) : Deck.ICONS;
  }

  initCards(): void {
    const numbers: number[] = Array.from({length: this.pairsAmount}, (_, index) => index + 1);
    const pairs: number[] = numbers.concat(numbers).sort(() => Math.random() - 0.5);
    const icons: string[] = this.duplicateIcons(this.icons, this.pairsAmount * 2);

    if (this.selectedDeck === Deck.NUMBERS) {
      this.cardsToShow = pairs.map((value, index) => ({
        id: index,
        value: value,
        show: false
      }));
    } else {
      this.cardsToShow = icons.map((value, index) => ({
        id: index,
        value: value,
        show: false
      }));
    }
  }

  duplicateIcons(iconsArray: string[], length: number): string[] {
    const duplicatedIcons: string[] = [];

    iconsArray.forEach((icon) => {
      duplicatedIcons.push(icon, icon);
    });

    duplicatedIcons.splice(length);

    for (let i = duplicatedIcons.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [duplicatedIcons[i], duplicatedIcons[j]] = [duplicatedIcons[j], duplicatedIcons[i]];
    }

    return duplicatedIcons;
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
      this.moveToEndGameScreen();
    }
  }

  areAllCardsTurned(): boolean {
    return this.cardsToShow.every((card: Card) => card.show);
  }

  moveToEndGameScreen(): void {
    const queryParams: NavigationExtras = {
      queryParams: {
        gameLevel: this.level,
        levelTime: this.timer
      }
    };

    this.router.navigate(['/win'], queryParams);
  }
}

import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environment/environment.prod";
import {Deck, Home, Level} from "./home";

@Component({
  selector: 'fam-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  protected readonly environment = environment;
  protected readonly LEVELS: Level[] = Home;
  protected readonly Deck = Deck;

  selectedDeck: Deck = Deck.ICONS;

  ngOnInit() {
    const savedDeck = localStorage.getItem('selectedDeck');
    this.selectedDeck = savedDeck ? JSON.parse(savedDeck) : Deck.ICONS;
  }

  selectDeck(deckType: Deck): void {
    switch (deckType) {
      case Deck.NUMBERS:
        this.selectedDeck = Deck.NUMBERS;
        localStorage.setItem('selectedDeck', JSON.stringify(Deck.NUMBERS));
        console.log('set: ', Deck.NUMBERS)
        break;
      case Deck.ICONS:
        this.selectedDeck = Deck.ICONS;
        localStorage.setItem('selectedDeck', JSON.stringify(Deck.ICONS));
        console.log('set: ', Deck.ICONS)
        break;
      default:
        break;
    }
  }
}

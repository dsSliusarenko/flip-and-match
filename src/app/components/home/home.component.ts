import {Component} from '@angular/core';
import {environment} from "../../../environment/environment.prod";
import {Deck, Home, Level} from "./home";

@Component({
  selector: 'fam-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  protected readonly environment = environment;
  protected readonly LEVELS: Level[] = Home;
  protected readonly Deck = Deck;

  selectedDeck: Deck = Deck.ICON;

  selectDeck(deckType: Deck): void {
    switch (deckType) {
      case Deck.NUMBERS:
        this.selectedDeck = Deck.NUMBERS;
        localStorage.setItem('selectedDeck', JSON.stringify(Deck.NUMBERS));
        break;
      case Deck.ICON:
        this.selectedDeck = Deck.ICON;
        localStorage.setItem('selectedDeck', JSON.stringify(Deck.ICON));
        break;
      default:
        break;
    }
  }
}

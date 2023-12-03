import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environment/environment.prod";
import {Deck, Home, Level} from "./home";
import {ScoreChartService} from "../../services/score-chart.service";

@Component({
  selector: 'fam-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  protected readonly environment = environment;

  // TODO: check naming and change color picker logic
  protected readonly LEVELS: Level[] = Home;
  protected readonly Deck = Deck;

  selectedDeck: Deck = Deck.ICONS;

  constructor(private scoreChartService: ScoreChartService) {
  }

  ngOnInit() {
    const savedDeck = localStorage.getItem('selectedDeck');
    this.selectedDeck = savedDeck ? JSON.parse(savedDeck) : Deck.ICONS;
  }

  selectDeck(deckType: Deck): void {
    switch (deckType) {
      case Deck.NUMBERS:
        this.selectedDeck = Deck.NUMBERS;
        localStorage.setItem('selectedDeck', JSON.stringify(Deck.NUMBERS));
        break;
      case Deck.ICONS:
        this.selectedDeck = Deck.ICONS;
        localStorage.setItem('selectedDeck', JSON.stringify(Deck.ICONS));
        break;
      default:
        break;
    }
  }

  resetScores(): void {
    this.scoreChartService.setDefaultChart();
  }
}

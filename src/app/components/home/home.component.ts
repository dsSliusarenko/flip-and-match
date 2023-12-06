import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environment/environment.prod";
import {Deck} from "./home";
import {ScoreChartService} from "../../services/score-chart.service";
import {ScoreChart} from "../score-chart/chart";
import {DialogComponent} from "../../ui/dialog/dialog.component";
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'fam-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  protected readonly environment = environment;
  protected readonly Deck = Deck;

  levels!: ScoreChart;
  selectedDeck: Deck = Deck.ICONS;

  constructor(private scoreChartService: ScoreChartService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    const savedDeck = localStorage.getItem('selectedDeck');
    this.selectedDeck = savedDeck ? JSON.parse(savedDeck) : Deck.ICONS;
    this.levels = this.scoreChartService.getLevelsSpecifications()
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

  openDialog(): void {
    this.dialog.open(DialogComponent);
  }
}

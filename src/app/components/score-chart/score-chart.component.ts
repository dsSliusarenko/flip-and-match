import {Component, OnInit} from '@angular/core';
import {ScoreChartService} from "../../services/score-chart.service";
import {ScoreChartExtended} from "./chart";

@Component({
  selector: 'fam-score-chart',
  templateUrl: './score-chart.component.html',
  styleUrls: ['./score-chart.component.scss']
})
export class ScoreChartComponent implements OnInit {
  chart!: ScoreChartExtended;

  constructor(private scoreChartService: ScoreChartService) {
  }

  ngOnInit(): void {
    this.chart = this.scoreChartService.getScoreChart();
  }
}

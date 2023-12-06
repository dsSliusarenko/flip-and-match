import {Component} from '@angular/core';
import {environment} from "../environment/environment.prod";
import {ScoreChartService} from "./services/score-chart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  protected readonly environment = environment;

  constructor(private scoreChartService: ScoreChartService) {
    this.scoreChartService.setDefaultChart();
  }
}

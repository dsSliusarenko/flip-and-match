import {Component, OnDestroy} from '@angular/core';
import {environment} from "../environment/environment.prod";
import {ScoreChartService} from "./services/score-chart.service";
import {BreakpointService} from "./services/breakpoint.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  protected readonly environment = environment;

  constructor(private scoreChartService: ScoreChartService, private breakpointService: BreakpointService) {
    this.scoreChartService.setDefaultChart();
  }

  ngOnDestroy() {
    this.breakpointService.unsubscribe();
  }
}

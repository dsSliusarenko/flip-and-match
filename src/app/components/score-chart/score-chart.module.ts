import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScoreChartComponent} from './score-chart.component';
import {RenderChartComponent} from './render-chart/render-chart.component';

@NgModule({
  declarations: [
    ScoreChartComponent,
    RenderChartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScoreChartComponent,
    RenderChartComponent
  ],
})
export class ScoreChartModule {
}

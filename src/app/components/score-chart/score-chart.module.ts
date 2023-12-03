import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScoreChartComponent} from './score-chart.component';
import {RenderChartComponent} from './render-chart/render-chart.component';

@NgModule({
  declarations: [
    ScoreChartComponent,
    RenderChartComponent
  ],
  exports: [
    ScoreChartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ScoreChartModule {
}

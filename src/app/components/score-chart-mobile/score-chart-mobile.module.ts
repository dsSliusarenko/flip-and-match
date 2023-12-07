import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScoreChartMobileComponent} from './score-chart-mobile.component';
import {IconModule} from "../../ui/icon/icon.module";

@NgModule({
  declarations: [
    ScoreChartMobileComponent
  ],
  exports: [
    ScoreChartMobileComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ]
})
export class ScoreChartMobileModule {
}

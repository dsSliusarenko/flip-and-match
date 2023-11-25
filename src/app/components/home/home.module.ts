import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {LogoModule} from "../logo/logo.module";
import {MatIconModule} from "@angular/material/icon";
import {IconModule} from "../../ui/icon/icon.module";
import {ScoreChartModule} from "../score-chart/score-chart.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    LogoModule,
    IconModule,
    MatIconModule,
    ScoreChartModule
  ]
})
export class HomeModule {
}

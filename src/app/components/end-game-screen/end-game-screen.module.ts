import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EndGameScreenComponent} from './end-game-screen.component';
import {FlipCardsRenderModule} from "../../ui/flip-cards-render/flip-cards-render.module";
import {ScoreChartModule} from "../score-chart/score-chart.module";
import {AngularMaterialModule} from "../../ui/angular-material/angular-material.module";

@NgModule({
  declarations: [
    EndGameScreenComponent
  ],
  imports: [
    CommonModule,
    FlipCardsRenderModule,
    ScoreChartModule,
    AngularMaterialModule
  ],
  exports: [
    EndGameScreenComponent
  ]
})
export class EndGameScreenModule {
}

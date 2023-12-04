import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EndGameScreenComponent} from './end-game-screen.component';
import {FlipCardsRenderModule} from "../../ui/flip-cards-render/flip-cards-render.module";

@NgModule({
  declarations: [
    EndGameScreenComponent
  ],
  imports: [
    CommonModule,
    FlipCardsRenderModule
  ],
  exports: [
    EndGameScreenComponent
  ]
})
export class EndGameScreenModule {
}

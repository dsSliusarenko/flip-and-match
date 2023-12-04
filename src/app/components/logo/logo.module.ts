import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogoComponent} from './logo.component';
import {FlipCardsRenderModule} from "../../ui/flip-cards-render/flip-cards-render.module";


@NgModule({
  declarations: [
    LogoComponent
  ],
    imports: [
        CommonModule,
        FlipCardsRenderModule
    ],
  exports: [
    LogoComponent
  ]
})
export class LogoModule {
}

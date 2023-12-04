import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardsMatrixComponent} from "./cards-matrix.component";
import {IconModule} from "../icon/icon.module";

@NgModule({
  declarations: [
    CardsMatrixComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    CardsMatrixComponent
  ]
})
export class CardMatrixModule { }

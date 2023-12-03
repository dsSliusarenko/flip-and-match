import {NgModule} from "@angular/core";
import {EasyComponent} from './easy/easy.component';
import {LevelsComponent} from "./levels.component";
import {LevelsRoutingModule} from "./levels-routing.module";
import { MediumComponent } from './medium/medium.component';
import { HardComponent } from './hard/hard.component';
import {CommonModule} from "@angular/common";
import {IconModule} from "../../ui/icon/icon.module";

@NgModule({
  declarations: [
    LevelsComponent,
    EasyComponent,
    MediumComponent,
    HardComponent
  ],
  imports: [
    CommonModule,
    LevelsRoutingModule,
    IconModule
  ],
  exports: []
})

export class LevelsModule {

}

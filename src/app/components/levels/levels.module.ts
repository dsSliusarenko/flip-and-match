import {NgModule} from "@angular/core";
import {EasyComponent} from './easy/easy.component';
import {LevelsComponent} from "./levels.component";
import {LevelsRoutingModule} from "./levels-routing.module";
import { MediumComponent } from './medium/medium.component';
import { HardComponent } from './hard/hard.component';

@NgModule({
  declarations: [
    LevelsComponent,
    EasyComponent,
    MediumComponent,
    HardComponent
  ],
  imports: [
    LevelsRoutingModule
  ],
  exports: []
})

export class LevelsModule {

}

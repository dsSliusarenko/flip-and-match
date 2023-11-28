import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LevelsComponent} from "./levels.component";
import {EasyComponent} from "./easy/easy.component";
import {HardComponent} from "./hard/hard.component";
import {MediumComponent} from "./medium/medium.component";

const levelsRoutes: Routes = [
  {
    path: '',
    component: LevelsComponent,
    children: [
      {
        path: 'easy',
        component: EasyComponent
      },
      {
        path: 'medium',
        component: MediumComponent
      },
      {
        path: 'hard',
        component: HardComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(levelsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LevelsRoutingModule {
}

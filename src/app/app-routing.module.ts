import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {EndGameScreenComponent} from "./components/end-game-screen/end-game-screen.component";

const famRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'levels',
    loadChildren: () => import('./components/levels/levels.module').then((m) => m.LevelsModule)
  },
  {
    path: 'win',
    component: EndGameScreenComponent,
    // canActivate: [EndGameScreenGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(famRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

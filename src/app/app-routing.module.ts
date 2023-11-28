import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";


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

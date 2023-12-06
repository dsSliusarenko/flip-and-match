import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogComponent} from './dialog.component';
import {AngularMaterialModule} from "../angular-material/angular-material.module";

@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class DialogModule {
}

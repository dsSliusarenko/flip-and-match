import {NgModule} from '@angular/core';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class AngularMaterialModule {
}

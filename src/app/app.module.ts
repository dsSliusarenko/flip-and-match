import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LogoModule} from "./components/logo/logo.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        LogoModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

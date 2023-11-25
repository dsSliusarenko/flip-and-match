import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LogoModule} from "./components/logo/logo.module";
import {IconModule} from "./ui/icon/icon.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LogoModule,
    IconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

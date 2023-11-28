import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {LogoModule} from "./components/logo/logo.module";
import {IconModule} from "./ui/icon/icon.module";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomeModule} from "./components/home/home.module";
import {LevelsModule} from "./components/levels/levels.module";
import {ScoreChartModule} from "./components/score-chart/score-chart.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LogoModule,
    IconModule,
    AppRoutingModule,
    IconModule,
    HomeModule,
    LevelsModule,
    ScoreChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

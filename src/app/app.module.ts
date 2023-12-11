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
import {DialogModule} from "./ui/dialog/dialog.module";
import {EndGameScreenModule} from "./components/end-game-screen/end-game-screen.module";
import {BreakpointObserver} from "@angular/cdk/layout";

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
    ScoreChartModule,
    DialogModule,
    EndGameScreenModule
  ],
  providers: [BreakpointObserver],
  bootstrap: [AppComponent]
})
export class AppModule {
}

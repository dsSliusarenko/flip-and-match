import { Component } from '@angular/core';
import {environment} from "../../../environment/environment.prod";
import {LEVELS} from "./levels";

@Component({
  selector: 'fam-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  protected readonly environment = environment;
  protected readonly LEVELS = LEVELS;
}

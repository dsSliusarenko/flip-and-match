import { Component } from '@angular/core';
import {environment} from "../../../environment/environment.prod";

@Component({
  selector: 'fam-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  protected readonly environment = environment;
}

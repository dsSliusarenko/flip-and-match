import { Component } from '@angular/core';
import {environment} from "../environment/environment.prod";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flip-and-match';
  protected readonly environment = environment;
}

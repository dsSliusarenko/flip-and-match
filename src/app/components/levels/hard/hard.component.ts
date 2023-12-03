import { Component } from '@angular/core';
import {Levels} from "../levels";

@Component({
  selector: 'fam-hard',
  templateUrl: './hard.component.html',
  styleUrls: ['./hard.component.scss']
})
export class HardComponent {
  protected readonly Levels = Levels;
}

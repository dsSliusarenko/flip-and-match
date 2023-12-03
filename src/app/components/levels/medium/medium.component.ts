import {Component} from '@angular/core';
import {Levels} from "../levels";

@Component({
  selector: 'fam-medium',
  templateUrl: './medium.component.html',
  styleUrls: ['./medium.component.scss']
})
export class MediumComponent {
  protected readonly Levels = Levels;
}

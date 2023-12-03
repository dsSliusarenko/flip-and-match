import {Component} from '@angular/core';
import {Levels} from "../levels";

@Component({
  selector: 'fam-easy',
  templateUrl: './easy.component.html',
  styleUrls: ['./easy.component.scss']
})
export class EasyComponent {
  protected readonly Levels = Levels;
}

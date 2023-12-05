import {Component} from '@angular/core';
import {AnimationType} from "../../ui/flip-cards-render/flip-cards";
import {environment} from "../../../environment/environment.prod";

@Component({
  selector: 'fam-end-game-screen',
  templateUrl: './end-game-screen.component.html',
  styleUrls: ['./end-game-screen.component.scss']
})
export class EndGameScreenComponent {
  protected readonly AnimationType = AnimationType;
  protected readonly environment = environment;
}

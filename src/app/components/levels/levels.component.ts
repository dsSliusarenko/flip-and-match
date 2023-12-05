import {Component, OnInit} from "@angular/core";
import {GameStatusService} from "../../services/game-status.service";

@Component({
  selector: 'fam-levels',
  templateUrl: 'levels.component.html',
  styleUrls: ['levels.component.scss']
})
export class LevelsComponent implements OnInit {

  constructor(private gameStatusService: GameStatusService) {
  }

  ngOnInit(): void {
    this.gameStatusService.setIsGameStartedTrue();
  }

  setIsGameStarted(): void {
    this.gameStatusService.setIsGameStartedFalse();
  }
}

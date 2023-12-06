import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {GameStatusService} from "../services/game-status.service";

@Injectable({
  providedIn: 'root'
})
export class EndGameScreenGuard {
  constructor(private router: Router, private gameStatusService: GameStatusService) {
    this.canActivate();
  }

  canActivate(): boolean {
    if (this.gameStatusService.isLevelPassedState) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}

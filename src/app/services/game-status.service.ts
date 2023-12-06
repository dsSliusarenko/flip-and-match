import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GameStatusService {
  private isGameStarted: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isLevelPassed: boolean = false;

  setIsGameStartedTrue(): void {
    this.isGameStarted.next(true);
  }

  setIsGameStartedFalse(): void {
    this.isGameStarted.next(false);
  }

  get isGameStartedState(): BehaviorSubject<boolean> {
    return this.isGameStarted;
  }

  setIsLevelPassedTrue(): void {
    this.isLevelPassed = true;
  }

  setIsLevelPassedFalse(): void {
    this.isLevelPassed = false;
  }

  get isLevelPassedState(): boolean {
    return this.isLevelPassed;
  }
}

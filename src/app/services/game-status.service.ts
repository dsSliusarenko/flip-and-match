import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GameStatusService {
  isGameStarted: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  setIsGameStartedTrue(): void {
    this.isGameStarted.next(true);
  }

  setIsGameStartedFalse(): void {
    this.isGameStarted.next(false);
  }

  get isGameStartedState(): BehaviorSubject<boolean> {
    return this.isGameStarted;
  }
}

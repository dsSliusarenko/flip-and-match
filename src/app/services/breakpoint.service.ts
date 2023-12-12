import {Injectable} from "@angular/core";
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {Subscription} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BreakpointService {
  private breakpointSubscription: Subscription;
  private isCurrentScreenMobile: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointSubscription = this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.setMobileScreen();
        }
      });
  }

  private setMobileScreen(): void {
    this.isCurrentScreenMobile = true;
  }

  get isScreenMobile(): boolean {
    return this.isCurrentScreenMobile;
  }

  unsubscribe(): void {
    this.breakpointSubscription.unsubscribe();
  }
}

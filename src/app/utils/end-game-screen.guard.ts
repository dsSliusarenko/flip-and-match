import {Injectable} from '@angular/core';
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class EndGameScreenGuard {

  constructor(private router: Router) {
    this.canActivate();
  }

  canActivate(): boolean {
    //@ts-ignore
    this.router.navigate(['/home']);
    return false;
  }
}

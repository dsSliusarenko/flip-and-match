import {Component} from '@angular/core';
import {environment} from "../../../environment/environment.prod";
import {AnimationType} from "../../ui/flip-cards-render/flip-cards";
import {BreakpointService} from "../../services/breakpoint.service";

@Component({
  selector: 'fam-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  protected readonly AnimationType = AnimationType;

  textToRender: string = environment.appTitle;

  constructor(private brakePointService: BreakpointService) {
    if (this.brakePointService.isScreenMobile) {
      this.textToRender = environment.appTitle.substring(0,5)
    }
  }
}

import {Component} from '@angular/core';
import {environment} from "../../../environment/environment.prod";
import {AnimationType} from "../../ui/flip-cards-render/flip-cards";

@Component({
  selector: 'fam-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent{
  protected readonly environment = environment;
  protected readonly AnimationType = AnimationType;
}

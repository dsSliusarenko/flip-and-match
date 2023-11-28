import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environment/environment.prod";

@Component({
  selector: 'fam-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit{
  protected readonly environment = environment;
  logoLetters!: string[];

  ngOnInit(): void {
    this.logoLetters = environment.appTitle.split('');
  }
}

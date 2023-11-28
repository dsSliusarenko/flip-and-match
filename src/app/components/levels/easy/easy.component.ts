import {Component, OnInit} from '@angular/core';
import {Card} from "../card";
import {Observable, Subject, takeUntil, timer} from 'rxjs';

@Component({
  selector: 'fam-easy',
  templateUrl: './easy.component.html',
  styleUrls: ['./easy.component.scss']
})
export class EasyComponent implements OnInit {
  rxjsTimer: Observable<number> = timer(1000, 1000);
  destroy: Subject<any> = new Subject();

  timer: number = 0;


  demoCards: Card[] = [
    {
      icon: 'test'
    }, {
      icon: 'test'
    }, {
      icon: 'test'
    }, {
      icon: 'test'
    }, {
      icon: 'test'
    }, {
      icon: 'test'
    }, {
      icon: 'test'
    }, {
      icon: 'test'
    }, {
      icon: 'test'
    }, {
      icon: 'test'
    }, {
      icon: 'test'
    }, {
      icon: 'test'
    }, {
      icon: 'test'
    }, {
      icon: 'test'
    }, {
      icon: 'test'
    }, {
      icon: 'test'
    }
  ]

  showCards!: Card[];


  ngOnInit() {
    this.rxjsTimer.pipe(takeUntil(this.destroy)).subscribe(time => {
      this.timer = time;
    })
  }
}

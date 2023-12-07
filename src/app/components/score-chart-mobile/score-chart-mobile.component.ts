import {AfterViewInit, Component, ElementRef, Input, OnChanges, ViewChild} from '@angular/core';
import {ChartData, ScoreChartExtended} from "../score-chart/chart";
import {ScoreChartService} from "../../services/score-chart.service";
import * as Hammer from 'hammerjs';

@Component({
  selector: 'fam-score-chart-mobile',
  templateUrl: './score-chart-mobile.component.html',
  styleUrls: ['./score-chart-mobile.component.scss']
})
export class ScoreChartMobileComponent implements OnChanges, AfterViewInit {
  @Input() initSlidesAmount!: number;

  @ViewChild('carousel') carousel!: ElementRef;

  scoreChart!: ScoreChartExtended;
  slides: ChartData [] = [];
  visibleSlides!: any[];
  currentIndex = 0;

  constructor(private scoreChartService: ScoreChartService) {
    this.scoreChart = this.scoreChartService.getScoreChart();

    this.slides[0] = this.scoreChart.easy;
    this.slides[1] = this.scoreChart.medium;
    this.slides[2] = this.scoreChart.hard;
  }

  ngAfterViewInit(): void {
    const element = this.carousel.nativeElement;
    const hammer: HammerManager = new Hammer(element);

    hammer.on('swipeleft', () => {
      this.nextSlide();
    });

    hammer.on('swiperight', () => {
      this.prevSlide();
    });
  }

  ngOnChanges(): void {
    this.updateVisibleSlides();
  }

  updateVisibleSlides(): void {
    this.visibleSlides = this.slides.slice(this.currentIndex, this.currentIndex + this.initSlidesAmount);
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.slides.length - this.initSlidesAmount;
    }
    this.updateVisibleSlides();
  }

  nextSlide(): void {
    if (this.currentIndex < this.slides.length - this.initSlidesAmount) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.updateVisibleSlides();
  }
}

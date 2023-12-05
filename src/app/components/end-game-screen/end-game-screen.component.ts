import {Component, OnDestroy, OnInit} from '@angular/core';
import {AnimationType} from "../../ui/flip-cards-render/flip-cards";
import {environment} from "../../../environment/environment.prod";
import {ScoreChartExtended} from "../score-chart/chart";
import {ScoreChartService} from "../../services/score-chart.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Levels} from "../levels/levels";
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GameStatusService} from "../../services/game-status.service";

@Component({
  selector: 'fam-end-game-screen',
  templateUrl: './end-game-screen.component.html',
  styleUrls: ['./end-game-screen.component.scss']
})
export class EndGameScreenComponent implements OnInit, OnDestroy {
  protected readonly AnimationType = AnimationType;
  protected readonly Levels = Levels;

  protected readonly environment = environment;

  chart!: ScoreChartExtended;
  selectedDifficultyLevel!: Levels;
  levelTime!: number;

  subscriptions: Subscription = new Subscription();

  scoreRecordForm!: FormGroup;

  constructor(
    private scoreChartService: ScoreChartService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private gameStatusService: GameStatusService
  ) {
  }

  ngOnInit(): void {
    this.gameStatusService.setIsGameStartedFalse();

    this.chart = this.scoreChartService.getScoreChart();

    this.scoreRecordForm = this.formBuilder.group({
      levelTime: ['', Validators.required],
    });

    this.subscriptions.add(
      this.route.queryParams.subscribe(params => {
        this.selectedDifficultyLevel = params['gameLevel']
        this.levelTime = params['levelTime']
      })
    )
  }

  makeScoreRecord(): void {
    if (this.scoreRecordForm.valid) {
      // add logic for sending the record to the chart
      this.router.navigate(['/home']);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {AnimationType} from "../../ui/flip-cards-render/flip-cards";
import {environment} from "../../../environment/environment.prod";
import {ScoreChartExtended, ScoreRecord} from "../score-chart/chart";
import {ScoreChartService} from "../../services/score-chart.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Levels} from "../levels/levels";
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GameStatusService} from "../../services/game-status.service";
import {BreakpointService} from "../../services/breakpoint.service";

@Component({
  selector: 'fam-end-game-screen',
  templateUrl: './end-game-screen.component.html',
  styleUrls: ['./end-game-screen.component.scss']
})
export class EndGameScreenComponent implements OnInit, OnDestroy {
  protected readonly AnimationType = AnimationType;
  protected readonly Levels = Levels;

  chart!: ScoreChartExtended;
  selectedDifficultyLevel!: Levels;
  levelTime!: number;

  subscriptions: Subscription = new Subscription();

  scoreRecordForm!: FormGroup;

  textToRender: string = environment.webWinTitle;

  constructor(
    private scoreChartService: ScoreChartService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private gameStatusService: GameStatusService,
    private brakePointService: BreakpointService
  ) {
    if (this.brakePointService.isScreenMobile) {
      this.textToRender = environment.mobileWinTitle;
    }
  }

  ngOnInit(): void {
    this.gameStatusService.setIsGameStartedFalse();

    this.chart = this.scoreChartService.getScoreChart();

    this.scoreRecordForm = this.formBuilder.group({
      playerName: ['', Validators.required],
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

      const scoreRecord: ScoreRecord = {
        time: this.levelTime,
        playerName: this.scoreRecordForm.get('playerName')?.value
      }

      this.scoreChartService.makeNewRecord(scoreRecord, this.selectedDifficultyLevel);
      this.router.navigate(['/home']);
      this.gameStatusService.setIsLevelPassedFalse();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

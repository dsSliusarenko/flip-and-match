import {Injectable} from "@angular/core";
import {ScoreChart, ScoreChartExtended, ScoreRecord} from "../components/score-chart/chart";
import {Levels} from "../components/levels/levels";

@Injectable({
  providedIn: "root"
})
export class ScoreChartService {
  private scoreChart: ScoreChartExtended = {
    easy: {
      title: 'easy',
      color: '#00FF01',
      records: []
    },
    medium: {
      title: 'medium',
      color: '#FFFF01',
      records: []
    },
    hard: {
      title: 'hard',
      color: '#FA8072',
      records: []
    }
  }

  emptyRecord: ScoreRecord = {
    playerName: '----------',
    time: 0
  }

  setDefaultChart(): void {
    this.scoreChart.easy.records = Array(10).fill(this.emptyRecord);
    this.scoreChart.medium.records = Array(10).fill(this.emptyRecord);
    this.scoreChart.hard.records = Array(10).fill(this.emptyRecord);
  }

  getScoreChart(): ScoreChartExtended {
    return this.scoreChart;
  }

  getLevelsSpecifications(): ScoreChart {
    const {easy, medium, hard} = this.scoreChart;
    const {records: _, ...easyWithoutRecords} = easy;
    const {records: __, ...mediumWithoutRecords} = medium;
    const {records: ___, ...hardWithoutRecords} = hard;

    return {
      easy: easyWithoutRecords,
      medium: mediumWithoutRecords,
      hard: hardWithoutRecords
    };
  }

  makeNewRecord(scoreRecord: ScoreRecord, level: Levels): void {
    switch (level) {
      case Levels.EASY:
        this.scoreChart.easy.records = this.addAndSortScore(this.scoreChart.easy.records, scoreRecord);
        break;
      case Levels.MEDIUM:
        this.scoreChart.medium.records = this.addAndSortScore(this.scoreChart.medium.records, scoreRecord);
        break;
      case Levels.HARD:
        this.scoreChart.hard.records = this.addAndSortScore(this.scoreChart.hard.records, scoreRecord);
        break;
    }
  }

  addAndSortScore(records: ScoreRecord[], newRecord: ScoreRecord): ScoreRecord[] {
    const nonZeroTimeRecords: ScoreRecord[] = records.filter(record => record.time !== 0);
    const sortedRecords: ScoreRecord[] = nonZeroTimeRecords.concat(newRecord).sort((a, b) => a.time - b.time);

    if (sortedRecords.length > 10) {
      return sortedRecords.slice(0, 10);
    }

    while (sortedRecords.length < 10) {
      sortedRecords.push(this.emptyRecord);
    }

    return sortedRecords;
  }
}

import {Injectable} from "@angular/core";
import {ScoreChart, ScoreChartExtended, ScoreRecord} from "../components/score-chart/chart";

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

  setDefaultChart(): void {
    const emptyRecord: ScoreRecord = {
      playerName: '----------',
      time: 0
    }

    this.scoreChart.easy.records = Array(10).fill(emptyRecord);
    this.scoreChart.medium.records = Array(10).fill(emptyRecord);
    this.scoreChart.hard.records = Array(10).fill(emptyRecord);
  }

  getScoreChart(): ScoreChartExtended {
    return this.scoreChart;
  }

  getLevelsSpecifications(): ScoreChart {
    const { easy, medium, hard } = this.scoreChart;

    const { records: _, ...easyWithoutRecords } = easy;
    const { records: __, ...mediumWithoutRecords } = medium;
    const { records: ___, ...hardWithoutRecords } = hard;

    return {
      easy: easyWithoutRecords,
      medium: mediumWithoutRecords,
      hard: hardWithoutRecords
    };
  }
}

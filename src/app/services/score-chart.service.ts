import {Injectable} from "@angular/core";
import {ScoreChart, ScoreRecord} from "../components/score-chart/chart";

@Injectable({
  providedIn: "root"
})
export class ScoreChartService {
  private scoreChart: ScoreChart = {
    easy: {
      color: '#00FF01',
      records: [
        {
          time: 0,
          playerName: '----------'
        },
        {
          time: 0,
          playerName: '----------'
        },
        {
          time: 0,
          playerName: '----------'
        },
        {
          time: 0,
          playerName: '----------'
        },
        {
          time: 0,
          playerName: '----------'
        },
        {
          time: 0,
          playerName: '----------'
        },
        {
          time: 0,
          playerName: '----------'
        },
        {
          time: 0,
          playerName: '----------'
        },
        {
          time: 0,
          playerName: '----------'
        },
        {
          time: 0,
          playerName: '----------'
        }
      ]
    },
    medium: {
      color: '#FFFF01',
      records: [
        {
          time: 0,
          playerName: '----------'
        },
        {
          time: 0,
          playerName: '----------'
        },
        {
          time: 0,
          playerName: '----------'
        },
        {
          time: 0,
          playerName: '----------'
        },
        {
          time: 0,
          playerName: '----------'
        },
        {
          time: 0,
          playerName: '----------'
        },
        {
          time: 0,
          playerName: '----------'
        },
        {
          time: 0,
          playerName: '----------'
        },
        {
          time: 0,
          playerName: '----------'
        },
        {
          time: 0,
          playerName: '----------'
        }
      ]
    },
    hard: {
      color: '#FA8072',
      records: [
        {
          time: 0,
          playerName: '----------'
        },
        {
          time: 0,
          playerName: '----------'
        },
        {
          time: 0,
          playerName: '----------'
        },
        {
          time: 0,
          playerName: '----------'
        },
        {
          time: 0,
          playerName: '----------'
        },
        {
          time: 0,
          playerName: '----------'
        },
        {
          time: 0,
          playerName: '----------'
        },
        {
          time: 0,
          playerName: '----------'
        },
        {
          time: 0,
          playerName: '----------'
        },
        {
          time: 0,
          playerName: '----------'
        }
      ]
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

  getScoreChart(): ScoreChart {
    return this.scoreChart;
  }
}

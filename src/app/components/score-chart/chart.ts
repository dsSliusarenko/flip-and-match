export interface ScoreChart {
  easy: {
    title: string,
    color: string,
  };
  medium: {
    title: string,
    color: string,
  };
  hard: {
    title: string,
    color: string,
  };
}

export interface ScoreChartExtended extends ScoreChart {
  easy: {
    title: string,
    color: string,
    records: ScoreRecord[];
  };
  medium: {
    title: string,
    color: string,
    records: ScoreRecord[];
  };
  hard: {
    title: string,
    color: string,
    records: ScoreRecord[];
  };
}

export interface ScoreRecord {
  time: number;
  playerName: string;
}

export interface ChartData {
  color: string,
  records: ScoreRecord[];
}

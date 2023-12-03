export interface ScoreChart {
    easy: {
        color: string,
        records: ScoreRecord[];
    };
    medium: {
        color: string,
        records: ScoreRecord[];
    };
    hard: {
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

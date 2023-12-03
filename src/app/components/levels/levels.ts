export interface Card {
  id: number;
  value: number;
  show: boolean;
  matched?: boolean
}

export enum Levels {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

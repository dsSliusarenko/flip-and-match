export interface Card {
  id: number;
  value: number | string;
  show: boolean;
  matched?: boolean
}

export enum Levels {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

export const IconsArray: string[] = [
  'key',
  'person',
  'thumb',
  'earth',
  'rocket',
  'lamp',
  'leaf',
  'pet',
  'health',
  'sad',
  'medal',
  'gavel',
  'diamond',
  'moon',
  'eldery',
  'egg',
  'trophy',
  'cart',
  'tooth',
  'volcano',
  'bones',
  'comm',
  'cognition',
  'footprints',
  'mask',
  'flower',
  'bomb',
  'raven',
  'lock',
  'bug',
  'build',
  'anchor'
]

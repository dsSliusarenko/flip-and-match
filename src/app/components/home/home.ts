export interface Level {
  title: string,
  color: string
}

export const Home: Level[] = [
  {
    title: 'easy',
    color: '#00FF01'
  },
  {
    title: 'medium',
    color: '#FFFF01'
  },
  {
    title: 'hard',
    color: '#FA8072'
  }
]

export enum Deck {
  ICONS = 'ICONS',
  NUMBERS = 'NUMBERS'
}

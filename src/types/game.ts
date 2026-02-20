export type Cell = "X" | "O" | null;

export enum GameResult {
  WIN = "win",
  LOSE = "lose",
  DRAW = "draw",
}

export type Result = GameResult | null;

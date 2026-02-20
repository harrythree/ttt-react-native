import { Cell } from "@/src/types/game";
import { checkWinner, emptyBoard, findBestMove, isFull } from "../game";

it("should return an empty board with 9 cells", () => {
  const board = emptyBoard();
  expect(board.every((c) => c === null)).toBe(true);
  expect(board).toHaveLength(9);
});

it("should return true if board is full", () => {
  const board: Cell[] = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
  const boardIsFull = isFull(board);

  expect(boardIsFull).toBe(true);
});

it("should return false if board is not full", () => {
  const board: Cell[] = ["X", "O", "X", "O", "X", "O", "X", "O", null];
  const boardIsFull = isFull(board);

  expect(boardIsFull).toBe(false);
});

it("should return a Cell if winner is found", () => {
  const board: Cell[] = ["X", "O", "X", "O", "X", "O", "X", null, null];
  const winner = checkWinner(board);

  expect(winner).toBe("X");
});

it("should return null if nowinner is found", () => {
  const board: Cell[] = ["X", "O", "X", "O", "X", null, null, null, null];
  const winner = checkWinner(board);

  expect(winner).toBe(null);
});

it("should return a valid board index if best move is found", () => {
  const board: Cell[] = ["X", "O", "X", "O", "X", null, null, null, null];
  const bot = "O";
  const human = "X";
  const bestMove = findBestMove(board, bot, human);

  expect(bestMove).toBe(5);
});

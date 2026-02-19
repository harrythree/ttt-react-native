export type Cell = "X" | "O" | null;
export type Result = "win" | "lose" | "draw" | null;

export const emptyBoard = (): Cell[] => Array(9).fill(null);

export const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function isFull(board: Cell[]) {
  return board.every((c) => c !== null);
}

export function checkWinner(board: Cell[]): Cell | null {
  for (const [a, b, c] of winningLines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}

export function findBestMove(board: Cell[], bot: Cell, human: Cell): number {
  let bestScore = -Infinity;
  let move = -1;

  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      board[i] = bot;
      const score = minimax(board, 0, false, bot, human);
      board[i] = null;

      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }

  return move;
}

function minimax(
  board: Cell[],
  depth: number,
  isMaximizing: boolean,
  bot: Cell,
  human: Cell,
): number {
  const winner = checkWinner(board);
  if (winner === bot) {
    return 10 - depth;
  }

  if (winner === human) {
    return depth - 10;
  }

  if (isFull(board)) {
    return 0;
  }

  if (isMaximizing) {
    let best = -Infinity;

    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = bot;
        const score = minimax(board, depth + 1, false, bot, human);
        board[i] = null;
        best = Math.max(best, score);
      }
    }

    return best;
  } else {
    let best = Infinity;

    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = human;
        const score = minimax(board, depth + 1, true, bot, human);
        board[i] = null;
        best = Math.min(best, score);
      }
    }

    return best;
  }
}

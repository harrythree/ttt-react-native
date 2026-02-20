import { useEffect, useState } from "react";

import { Cell, GameResult, Result } from "../types/game";
import { checkWinner, emptyBoard, findBestMove, isFull } from "./game";

const useGame = () => {
  const [board, setBoard] = useState<Cell[]>(emptyBoard());
  const [playerSymbol, setPlayerSymbol] = useState<Cell>("X");
  const [botSymbol, setBotSymbol] = useState<Cell>("O");
  const [currentTurn, setCurrentTurn] = useState<Cell>("X");
  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [result, setResult] = useState<Result>(null);

  useEffect(() => {
    if (!started) {
      return;
    }

    const winner = checkWinner(board);

    if (winner) {
      const resultValue =
        winner === playerSymbol ? GameResult.WIN : GameResult.LOSE;

      setGameOver(true);
      setResult(resultValue);
    }

    if (isFull(board)) {
      setGameOver(true);
      setResult(GameResult.DRAW);
    }

    if (currentTurn === botSymbol && !gameOver) {
      const move = findBestMove(board, botSymbol, playerSymbol);

      if (move >= 0) {
        const newBoard = board.slice();
        newBoard[move] = botSymbol;

        setBoard(newBoard);
        setCurrentTurn(playerSymbol);
      }
    }
  }, [board, currentTurn, started, botSymbol, playerSymbol, gameOver]);

  const handleStart = (playerGoesFirst: boolean) => {
    const player = playerGoesFirst ? "X" : "O";
    const bot = playerGoesFirst ? "O" : "X";
    const startingTurn = playerGoesFirst ? player : bot;

    setPlayerSymbol(player);
    setBotSymbol(bot);
    setBoard(emptyBoard());
    setGameOver(false);
    setResult(null);
    setStarted(true);
    setCurrentTurn(startingTurn);
  };

  const handleBoardPress = (index: number) => {
    const gameNotRunning = !started || gameOver;
    const cellOccupied = board[index] !== null;
    const notPlayerTurn = currentTurn !== playerSymbol;

    if (gameNotRunning || cellOccupied || notPlayerTurn) {
      return;
    }

    const newBoard = board.slice();
    newBoard[index] = playerSymbol;

    setBoard(newBoard);
    setCurrentTurn(botSymbol);
  };

  const newGame = () => {
    setStarted(false);
    setBoard(emptyBoard());
    setGameOver(false);
    setResult(null);
  };

  return {
    board,
    playerSymbol,
    botSymbol,
    currentTurn,
    started,
    gameOver,
    result,
    handleStart,
    handleBoardPress,
    newGame,
  };
};

export default useGame;

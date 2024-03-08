import { useEffect } from "react";
import Cells from "./Cells";
import "./Board.css";

export default function Board({
  board,
  cell,
  setCell,
  score,
  setScore,
  highScore,
  setHighScore,
  reset,
  setReset,
  showReset,
  setShowReset,
  gameOver,
  setGameOver,
}) {
  function generateBoard() {
    const newBoard = Array(Number(board)).fill("Safe");

    // Place bombs randomly in the newBoard
    for (let i = 0; i < Math.random() * board; i++) {
      const rand = Math.floor(Math.random() * board);
      newBoard[rand] = "Bomb";
    }

    let newCells = [];
    newBoard.map((b, rowIndex) => {
      const newCell = {
        id: rowIndex,
        isRevealed: false,
        isSafe: b === "Safe",
        isBomb: b === "Bomb",
      };
      newCells.push(newCell);
    });

    setCell(newCells);
  }

  useEffect(() => {
    if (reset) {
      setReset(!reset);
      generateBoard();
    }
    generateBoard();
  }, [board, reset]);

  return (
    <div className="board">
      <Cells
        cell={cell}
        setCell={setCell}
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
        reset={reset}
        setReset={setReset}
        showReset={showReset}
        setShowReset={setShowReset}
        gameOver={gameOver}
        setGameOver={setGameOver}
      />
    </div>
  );
}

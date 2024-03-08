import { useState } from "react";
import Board from "./Board";
import "./Main.css";

export default function Main() {
  const [reset, setReset] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [board, setBoard] = useState(12);
  const [cell, setCell] = useState([
    {
      id: 0,
      isRevealed: false,
      isSafe: true,
      isBomb: false,
    },
  ]);

  function onShowBoard() {
    setCell((cell) =>
      cell.map((item) => {
        const safeCount = cell.filter((item) => item.isSafe).length;
        setScore(safeCount);
        return { ...item, isRevealed: true };
      })
    );
    setShowReset(true);
  }

  function onReset() {
    setReset((reset) => !reset);
    setShowReset(false);
    setGameOver(false);
    setScore(0);
  }

  return (
    <div className="container">
      <h5 className="text">
        Score: {score} Highest Score: {highScore}
      </h5>

      <input
        type="text"
        value={board}
        className="text"
        onChange={(e) => setBoard(e.target.value)}
        readOnly={score} //readonly when in game
      />

      <Board
        board={board}
        setBoard={setBoard}
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

      <div className="btn-container">
        {showReset && (
          <button className="text" onClick={onReset}>
            Reset
          </button>
        )}
        <button
          className={`text ${showReset ? "ml-5" : ""} `}
          onClick={onShowBoard}
        >
          Show
        </button>
      </div>
    </div>
  );
}

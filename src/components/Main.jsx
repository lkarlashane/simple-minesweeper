import { useAppContext } from "../app-context/AppContextProvider";
import Board from "./Board";
import "./Main.css";

export default function Main() {
  const {
    setReset,
    showReset,
    setShowReset,
    setGameOver,
    score,
    setScore,
    highScore,
    board,
    setBoard,
    setCell,
  } = useAppContext();

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

      <Board />

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

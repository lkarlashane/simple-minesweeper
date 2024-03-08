/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./Cells.css";
export default function Cells({
  cell,
  setCell,
  score,
  setScore,
  highScore,
  setHighScore,
  setShowReset,
  gameOver,
  setGameOver,
}) {
  const elements = [];

  function onRevealCell(e, i) {
    e.preventDefault();
    cell[i].isRevealed = true;

    setCell((cell) =>
      cell.map((item) => {
        if (item.id === i) {
          let newScore = 0;
          if (item.isSafe) {
            newScore = score + 1;
            setScore(newScore);

            //highscore setting
            if (!highScore) {
              setHighScore(highScore + 1);
            } else {
              if (highScore === newScore) {
                setHighScore(newScore);
              }
              if (highScore < newScore) {
                setHighScore(newScore);
              }
            }
          } else if (item.isBomb) {
            // gameover and show reset button
            setGameOver(true);
            setShowReset(true);

            //set highscore after gameover
            if (score > highScore) {
              setHighScore(score);
            }
          }
          return { ...item, isRevealed: true };
        }
        return item;
      })
    );
  }

  for (let i = 0; i < cell.length; i++) {
    elements.push(
      <h6
        key={i}
        className={`cell ${
          cell[i].isRevealed ? (cell[i].isSafe ? "safe" : "bomb") : ""
        }`}
        onClick={(e) => (!gameOver ? onRevealCell(e, i) : "")}
      >
        {cell[i].isRevealed ? (cell[i].isSafe ? "Safe" : "Bomb") : ""}
      </h6>
    );
  }

  return <div className="cells">{elements}</div>;
}

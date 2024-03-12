import { useEffect } from "react";
import Cells from "./Cells";
import "./Board.css";
import { useAppContext } from "../app-context/AppContextProvider";

export default function Board() {
  const { reset, setReset, board, setCell } = useAppContext();

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
      <Cells />
    </div>
  );
}

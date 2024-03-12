/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
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

  const value = {
    reset,
    setReset,
    showReset,
    setShowReset,
    gameOver,
    setGameOver,
    score,
    setScore,
    highScore,
    setHighScore,
    board,
    setBoard,
    cell,
    setCell,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

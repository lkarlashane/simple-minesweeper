export function useLocalStorage(key) {
  const setHighScore = (value) => {
    try {
      return key ? window.localStorage.setItem(key, value) : undefined;
    } catch (error) {
      console.log(error);
    }
  };

  const getHighscore = () => {
    try {
      const highscore = window.localStorage.getItem(key);
      return highscore ? JSON.parse(highscore) : undefined;
    } catch (error) {
      console.log(error);
    }
  };

  return { setHighScore, getHighscore };
}


import Square from "./Square";
import "./style.css";
import { useState } from "react";

const TicTacToe = () => {
  const [squareVal, setSquareVal] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  function handleClick(index) {
    // console.log("clicked", index);
    if (squareVal[index] !== null || isWinner) {
      return;
    }

    const newVal = [...squareVal];
    newVal[index] = isX ? "X" : "O";
    setSquareVal(newVal);
    setIsX(!isX);
  }

  const winningPatterns = () => {
    const winningLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winningLogic) {
      const [a, b, c] = logic;
      if (
        squareVal[a] === squareVal[b] &&
        squareVal[a] === squareVal[c] &&
        squareVal[a] !== null
      ) {
        return true;
      }
    }
    return false;
  };

  const isWinner = winningPatterns();

  function handleReset() {
    setSquareVal(Array(9).fill(null));
    setIsX(true);
  }

  return (
    <>
      <h1 className="board">
        {isWinner ? `The Winner is ${isX ? "O" : "X"}` : "TicTacToe Board"}
      </h1>
      <h2 className="board">
        {isWinner ? "" : `Turn of Player  ${isX ? "X" : "O"}`}
      </h2>
      <div className="board-main">
        <div className="square-row">
          <Square value={squareVal[0]} onClick={() => handleClick(0)} />
          <Square value={squareVal[1]} onClick={() => handleClick(1)} />
          <Square value={squareVal[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="square-row">
          <Square value={squareVal[3]} onClick={() => handleClick(3)} />
          <Square value={squareVal[4]} onClick={() => handleClick(4)} />
          <Square value={squareVal[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="square-row">
          <Square value={squareVal[6]} onClick={() => handleClick(6)} />
          <Square value={squareVal[7]} onClick={() => handleClick(7)} />
          <Square value={squareVal[8]} onClick={() => handleClick(8)} />
        </div>
      </div>

      <div className="board">
        <button
          onClick={handleReset}
          style={{ marginTop: "1rem", cursor: "pointer" }}
        >
          Restart
        </button>
      </div>
    </>
  );
};

export default TicTacToe
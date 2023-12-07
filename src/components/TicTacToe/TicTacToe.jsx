import "./style.css";
import circle from "../../../src/assets/circle.png";
import cross from "../../../src/assets/cross.png";

export const TicTacToe = () => {
  return (
    <>
      <div className="container">
        <h1 className="title">
          TicTacToe Game in <span>React</span>
        </h1>
        <div className="board">
          <div className="row1">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
          <div className="row2">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
          <div className="row3">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
        </div>
        <button className="reset">Reset</button>
      </div>
    </>
  );
};

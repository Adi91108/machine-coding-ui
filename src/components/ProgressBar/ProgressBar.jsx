import { useEffect, useState } from "react";
import "./styles.css";

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    let process;
    if (isStart) {
      process = setInterval(() => {
        setProgress((pro) => pro + 1);
      }, 100);
    }

    if (progress === 100) {
      setIsStart(false);
    }

    return () => {
      clearInterval(process);
    };
  }, [progress, isStart]);

  function handleStart() {
    setIsStart(!isStart);
  }

  function handleReset() {
    setIsStart(false);
    setProgress(0);
  }

  return (
    <>
      <div className="progress">
        <h1>Progress Bar</h1>
        <p>
          <span
            className="span"
            style={{ color: `${progress >= 50 ? "white" : "black"}` }}
          >
            {progress}%
          </span>
        </p>
        <div
          className="div"
          style={{
            transform: `scaleX(${progress / 100})`,
            transformOrigin: "left",
          }}
        />

        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
            justifyContent: "center",
            position: "static",
            marginTop: "4rem",
          }}
        >
          <button onClick={handleStart}>{isStart ? "Pause" : "Start"}</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
};

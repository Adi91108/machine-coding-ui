import { useState, useEffect } from "react";
import "./styles.css";
import { Counter } from "./components/Counter";
import { FaPause, FaPlay, FaStop } from "react-icons/fa";

export const CountdownTimer = () => {
  //making States
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [miliSecond, setMiliSecond] = useState(0);
  const [isRunning, setIsRunning] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (miliSecond > 0) {
          setMiliSecond((mili) => mili - 1);
        } else if (second > 0) {
          setSecond((sec) => sec - 1);
          setMiliSecond(99);
        } else if (minute > 0) {
          setMinute((min) => min - 1);
          setSecond(59);
          setMiliSecond(99);
        } else if (hour > 0) {
          setHour((hr) => hr - 1);
          setMinute(59);
          setSecond(59);
          setMiliSecond(99);
        }
      }, 10);
    }
    if (hour === 0 && minute === 0 && second === 0 && miliSecond === 0) {
      setIsRunning(false);
    }
    if (hour === 0 && minute === 0 && second === 0 && miliSecond === 1) {
      setIsCompleted(true);
    }

    return () => clearInterval(interval);
  }, [hour, minute, second, miliSecond, isRunning, isCompleted]);

  // start
  const handleStart = () => {
    if (hour !== 0 || minute !== 0 || second !== 0 || miliSecond !== 0) {
      setIsRunning(true);
    } else {
      window.alert("Please set timer 1st. ");
    }
  };

  // pause
  function handleStop() {
    setIsRunning(false);
  }

  // stop
  function handleReset() {
    setIsRunning(false);
    setHour(0);
    setMinute(0);
    setSecond(0);
    setMiliSecond(0);
  }
  // handleChnages

  const handleHour = (e) => {
    setHour(e.target.value);
  };
  const handleMin = (e) => {
    setMinute(e.target.value);
  };
  const handleSec = (e) => {
    setSecond(e.target.value);
  };
  const handleMili = (e) => {
    setMiliSecond(e.target.value);
  };

  // function start
  //

  return (
    <div className="App">
      {isCompleted && <h1 className="title ">Timer Over</h1>}

      <Counter
        hour={hour}
        minute={minute}
        second={second}
        miliSecond={miliSecond}
        isRunning={isRunning}
        handleHour={handleHour}
        handleMin={handleMin}
        handleSec={handleSec}
        handleMili={handleMili}
      />
      <br />

      <button className="btn-accept btn btn-lg" onClick={handleStop}>
        <FaPause />
      </button>
      <button className="btn-warning btn btn-lg" onClick={handleStart}>
        <FaPlay />
      </button>
      <button className="btn-danger btn btn-lg" onClick={handleReset}>
        <FaStop />
      </button>
    </div>
  );
};

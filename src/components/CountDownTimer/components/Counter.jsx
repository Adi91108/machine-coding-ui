// import React from 'react'

import styled from "styled-components";
import { FaStopwatch } from "react-icons/fa";

const CounterWrapper = styled.div`
  margin-top: 30vh;
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  border-radius: 5px;
  padding: 1rem 0;
  margin-left: auto;
  margin-right: auto;

  .stop-watch {
    font-size: 5rem;
    margin-right: 1rem;
    margin-left: 1rem;
  }

  input {
    width: 60px;
    height: 60px;
    margin: 1rem;
    text-align: center;
    outline: none;
    border: none;
    text-decoration: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 3rem;
    border-radius: 5px;
  }

  input:hover {
    background-color: lightgray;
  }
`;

export const Counter = ({
  hour,
  minute,
  second,
  miliSecond,
  isRunning,
  handleHour,
  handleMin,
  handleSec,
  handleMili,
}) => {
  return (
    <CounterWrapper>
      <FaStopwatch className="stop-watch" />
      <div className="d-flex flex-column">
        <label>HH</label>
        <input value={hour} onChange={handleHour} />
      </div>
      <div className="d-flex flex-column">
        <label>MM</label>
        <input value={minute} onChange={handleMin} />
      </div>
      <div className="d-flex flex-column">
        <label>SS</label>
        <input value={second} onChange={handleSec} />
      </div>
      <div className="d-flex flex-column">
        <label>MS</label>
        <input value={miliSecond} onChange={handleMili} />
      </div>
    </CounterWrapper>
  );
};

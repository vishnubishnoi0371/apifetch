import React, { useState, useEffect } from "react";

const Timer = () => {
  const initialSeconds = localStorage.getItem("timerSeconds") || 1800;
  const [seconds, setSeconds] = useState(parseInt(initialSeconds));
  const [intervalId, setIntervalId] = useState(null);
  const [isRunning, setIsRunning] = useState(true); // Track whether timer is running or stopped

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      setIntervalId(id);

      return () => clearInterval(id);
    }
  }, [isRunning]);

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(intervalId);
      setIsRunning(false);
    }
  }, [seconds, intervalId]);

  useEffect(() => {
    localStorage.setItem("timerSeconds", seconds);
  }, [seconds]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleReset = () => {
    setSeconds(1800);
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div className="d-flex flex-col j_center items-center ">
      <h1 className="pt-100">UseEffect</h1>
      <h1>Timer: {formatTime(seconds)}</h1>
      <div className="d-flex gap-2">
        <button className="main_btn" onClick={handleReset}>
          Restart
        </button>
        <button className="main_btn" onClick={handleStop}>
          {isRunning ? "Pause" : "Resume"}
        </button>
      </div>
    </div>
  );
};

export default Timer;

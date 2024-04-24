import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(1800);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(intervalId);
    }
  }, [seconds]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="d-flex flex-col j_center items-center ">
      <h1>Hooks</h1>
      <h1>Timer: {formatTime(seconds)}</h1>
    </div>
  );
};

export default Timer;

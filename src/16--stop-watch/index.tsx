import React, { useState, useRef } from 'react';

function Stopwatch() {
  const [time, setTime] = useState<number>(0);
  const intervalRef = useRef<number>(0);

  const handleStart = () => {
    console.log('Clear setInterval');
    clearInterval(intervalRef.current);
    setTime(0);

    intervalRef.current = setInterval(() => {
      console.log('Run setInterval');
      setTime((time) => time + 1);
    }, 1000);
  };

  const handleStop = () => {
    console.log('Clear setInterval');
    clearInterval(intervalRef.current);
  };

  return (
    <>
      <p>Time passed: {time}s</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}

export default Stopwatch;

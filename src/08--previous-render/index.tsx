import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState<number>(0);
  const [previousCount, setPreviousCount] = useState<number>();
  const [trend, setTrend] = useState<string>();

  const handleIncreaseCount = (): void => {
    setPreviousCount(count);
    setCount((count) => count + 1);
    setTrend('increase');
  };

  const handleDecreaseCount = (): void => {
    setPreviousCount(count);
    setCount((count) => count - 1);
    setTrend('decrease');
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleDecreaseCount}>-</button>
      <button onClick={handleIncreaseCount}>+</button>
      <p>The previous count value is: {previousCount ?? '___'}.</p>
      <p>The trend is: {trend || '___'}.</p>
    </>
  );
}

export default MyComponent;

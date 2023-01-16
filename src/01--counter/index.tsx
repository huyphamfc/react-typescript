import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(`Previous Count: ${count}.`);
  };

  return <button onClick={handleClick}>You clicked {count} times.</button>;
}

export default Counter;

import React, { useRef } from 'react';

function MyCounter() {
  const count = useRef(0);

  const handleClick = () => {
    count.current++;
    console.log(`You clicked ${count.current} times.`);
  };

  console.log('Render: MyCounter');

  return <button onClick={handleClick}>Click Me!</button>;
}

export default MyCounter;

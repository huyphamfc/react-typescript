import React, { useState } from 'react';

function Color() {
  const [color, setColor] = useState<string>('red');

  const handleClick = () => {
    const colors = ['red', 'green', 'blue'];

    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  console.log('Render: Color');

  return (
    <>
      <p style={{ color }}>Color: {color}</p>
      <button onClick={handleClick}>Random Color</button>
    </>
  );
}

export default Color;

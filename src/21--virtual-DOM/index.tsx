import React, { useState } from 'react';

function MyComponent() {
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <>
      <h1>Virtual DOM</h1>
      <button onClick={handleClick}>Toggle Paragraph</button>
      {show && <p>Paragraph</p>}
    </>
  );
}

export default MyComponent;

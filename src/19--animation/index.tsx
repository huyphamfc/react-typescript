import React, { useState } from 'react';

import Welcome from './Welcome';

function MyAnimation() {
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => {
    setShow((state) => !state);
  };

  return (
    <>
      <button onClick={handleClick}>{show ? 'Hide' : 'Show'}</button>
      {show && <Welcome />}
    </>
  );
}

export default MyAnimation;

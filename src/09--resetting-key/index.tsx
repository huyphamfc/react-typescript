import React, { useState } from 'react';

import Form from './Form';

function MyComponent() {
  const [version, setVersion] = useState<number>(0);

  return (
    <>
      <Form key={version} />
      <button onClick={() => setVersion((state) => state + 1)}>Reset</button>
    </>
  );
}

export default MyComponent;

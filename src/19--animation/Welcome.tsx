import React, { useEffect, useRef } from 'react';

import FadeInAnimation from './animation';

function Welcome() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const animation = new FadeInAnimation(ref.current);
    animation.start(3000);

    return () => animation.stop();
  }, []);

  return (
    <h1
      ref={ref}
      style={{
        opacity: 0,
        color: 'white',
        padding: 50,
        textAlign: 'center',
        fontSize: 50,
        backgroundImage: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
      }}
    >
      Welcome, Huy!
    </h1>
  );
}

export default Welcome;

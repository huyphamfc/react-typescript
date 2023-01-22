import React, { useState, useEffect } from 'react';

type TContent = {
  id: number;
  name: string;
};

function MyComponent() {
  const [content, setContent] = useState<TContent[]>([]);
  const [showContent, setShowContent] = useState<boolean>(true);

  useEffect((): void => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setContent(data);
      });

    console.log('Fetch data');
  }, []);

  const handleToggleContent = (): void => {
    setShowContent((state) => !state);
  };

  console.log('Render: MyComponent');

  return (
    <>
      <button onClick={handleToggleContent}>{showContent ? 'Hide' : 'Show'}</button>
      {showContent &&
        (content.length > 0 ? (
          <ul>
            {content.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        ))}
    </>
  );
}

export default MyComponent;

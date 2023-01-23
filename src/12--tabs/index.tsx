import React, { useState, useEffect } from 'react';

type TContent = {
  id: number;
  title: string;
};

function MyTabs() {
  const [data, setData] = useState<TContent[]>([]);
  const [tab, setTab] = useState<string>('posts');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/${tab}`);
        const results = await res.json();
        setData(results);

        console.log('Fetch Data');
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [tab]);

  console.log('Render: MyTabs');

  return (
    <>
      <button onClick={() => setTab('posts')}>Posts</button>
      <button onClick={() => setTab('albums')}>Albums</button>
      <button onClick={() => setTab('todos')}>Todo</button>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {data && (
        <ul>
          {data.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default MyTabs;

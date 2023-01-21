import React, { useState, useEffect, ChangeEvent } from 'react';

function MyTitle() {
  const [title, setTitle] = useState<string>('');

  useEffect((): void => {
    document.title = title;
  });

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  return (
    <label>
      Title tag: <input value={title} onChange={handleChangeTitle} placeholder="Enter title" />
    </label>
  );
}

export default MyTitle;

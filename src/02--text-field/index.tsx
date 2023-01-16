import React, { useState, ChangeEvent, FormEvent } from 'react';

function MyInput() {
  const [text, setText] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  const handleReset = () => {
    setText('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

export default MyInput;

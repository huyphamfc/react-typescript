import React, { useState, ChangeEvent } from 'react';

function MyForm() {
  const [name, setName] = useState<string>('Nobody');
  const [age, setAge] = useState<number>(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handleIncreaseAge = (): void => {
    setAge((age) => age + 1);
  };

  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleIncreaseAge}>Increment Age</button>
      <p>
        Hello, {name}. You are {age}.
      </p>
    </>
  );
}

export default MyForm;

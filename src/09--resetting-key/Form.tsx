import React, { useState, ChangeEvent } from 'react';

function Form() {
  const [name, setName] = useState<string>('Nobody');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  return (
    <div>
      <input value={name} onChange={handleChange} />
      <p>Hello, {name}.</p>
    </div>
  );
}

export default Form;

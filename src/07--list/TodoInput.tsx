import React, { useState, ChangeEvent } from 'react';

type TodoInputProps = {
  onHandleAddTodo(content: string): void;
};

function TodoInput({ onHandleAddTodo }: TodoInputProps) {
  const [title, setTitle] = useState<string>('');

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const handleAddTodo = (): void => {
    if (!title) return;
    onHandleAddTodo(title);
    setTitle('');
  };

  return (
    <div>
      <input placeholder="Add todo" value={title} onChange={handleChangeTitle} />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default TodoInput;

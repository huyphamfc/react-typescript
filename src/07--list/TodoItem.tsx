import React, { useState, ChangeEvent } from 'react';

type TodoItemProps = {
  id: number;
  content: string;
  handleEditTodo(id: number, content: string): void;
  handleDeleteTodo(id: number): void;
};

function TodoItem(props: TodoItemProps) {
  const { id, content, handleEditTodo, handleDeleteTodo } = props;

  const [title, setTitle] = useState<string>(content);
  const [editing, setEditing] = useState<boolean>(false);

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const onHandleEditTodo = (): void => {
    if (!title) return;
    setEditing((state) => !state);

    handleEditTodo(id, title);
  };

  const onHandleDeleteTodo = (): void => {
    handleDeleteTodo(id);
  };

  return (
    <li>
      {editing || title}
      {editing && <input value={title} onChange={handleChangeTitle} />}
      <button onClick={onHandleEditTodo}>{editing ? 'Save' : 'Edit'}</button>
      <button onClick={onHandleDeleteTodo}>Delete</button>
    </li>
  );
}

export default TodoItem;

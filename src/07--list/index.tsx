import React, { useState } from 'react';

import TodoContent from './model';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function Todo() {
  const [todoList, setTodoList] = useState<TodoContent[]>([]);

  const handleAddTodo = (content: string): void => {
    setTodoList((todoList) => [
      ...todoList,
      {
        id: Math.random(),
        content,
      },
    ]);
  };

  const handleEditTodo = (id: number, content: string): void => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) return { id, content };
        return todo;
      }),
    );
  };

  const handleDeleteTodo = (id: number): void => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodoInput onHandleAddTodo={handleAddTodo} />
      <TodoList
        todoList={todoList}
        onHandleEditTodo={handleEditTodo}
        onHandleDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

export default Todo;

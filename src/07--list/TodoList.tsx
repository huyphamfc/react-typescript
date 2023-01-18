import React from 'react';

import TodoContent from './model';
import TodoItem from './TodoItem';

type TodoListProps = {
  todoList: TodoContent[];
  onHandleEditTodo(id: number, content: string): void;
  onHandleDeleteTodo(id: number): void;
};

function TodoList(props: TodoListProps) {
  const { todoList, onHandleEditTodo, onHandleDeleteTodo } = props;

  const listContent = todoList.map((todo) => (
    <TodoItem
      key={todo.id}
      {...todo}
      handleEditTodo={onHandleEditTodo}
      handleDeleteTodo={onHandleDeleteTodo}
    />
  ));

  return <ul>{listContent}</ul>;
}

export default TodoList;

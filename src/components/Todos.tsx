import React from 'react';
import { TodoItem } from '.';
import { ITodo } from '../interfaces';

interface TodoProps {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
}

const Todo: React.FC<TodoProps> = ({ todos, onToggle, onRemove }) => {
  return (
    <ul>
      {todos &&
        todos.map((item, index) => (
          <TodoItem key={`${item.id}_${index}`} onToggle={onToggle} onRemove={onRemove} {...item} />
        ))}
    </ul>
  );
};

export default Todo;

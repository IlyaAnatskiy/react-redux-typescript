import React from 'react';
import { ITodo } from '../interfaces';

interface TodoItemProps extends ITodo {
  onToggle(id: number): void;
  onRemove(id: number): void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed, onToggle, onRemove }) => {
  return (
    <li className={completed ? 'completed todo' : 'todo'}>
      <label>
        <input type="checkbox" checked={completed} onChange={onToggle.bind(null, id)} />
        <span>{title}</span>
        <i className="material-icons red-text" onClick={() => onRemove(id)}>
          delete
        </i>
      </label>
    </li>
  );
};

export default TodoItem;

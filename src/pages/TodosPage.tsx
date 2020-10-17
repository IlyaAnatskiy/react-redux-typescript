import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Todos, TodoForm } from '../components';
import { addTodo, completeTodo, removeTodo } from '../redux/actions/todos';
import { RootState } from '../redux/reducers';

const TodosPage = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const addHandler = (title: string) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    dispatch(addTodo(newTodo));
  };

  const toggleHandler = (id: number) => {
    dispatch(completeTodo(id));
  };

  const removeHandler = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      <TodoForm onAdd={addHandler} />
      <Todos todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
    </>
  );
};

export default TodosPage;

import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO } from '../../constans';
import { IAddTodoAction, ICompleteTodoAction, IRemoveTodoAction, ITodo } from '../../interfaces';

export const addTodo = (payload: ITodo): IAddTodoAction => ({
  type: ADD_TODO,
  payload,
});

export const removeTodo = (payload: number): IRemoveTodoAction => ({
  type: REMOVE_TODO,
  payload,
});

export const completeTodo = (payload: number): ICompleteTodoAction => ({
  type: COMPLETE_TODO,
  payload,
});

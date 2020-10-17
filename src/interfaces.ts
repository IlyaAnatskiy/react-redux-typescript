import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO } from './constans';

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface IAddTodoAction {
  type: typeof ADD_TODO;
  payload: ITodo;
}

export interface IRemoveTodoAction {
  type: typeof REMOVE_TODO;
  payload: number;
}

export interface ICompleteTodoAction {
  type: typeof COMPLETE_TODO;
  payload: number;
}

export type TodoActionTypes = IAddTodoAction | IRemoveTodoAction | ICompleteTodoAction;

export interface IInitialStateTodo {
  todos: ITodo[] | [];
}

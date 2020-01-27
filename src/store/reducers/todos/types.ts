export enum TodosTypes {
  ADD_TODO = '@todos/ADD_TODO',
  TOGGLE_TODO = '@todos/TOGGLE_TODO',
  REMOVE_TODO = '@todos/REMOVE_TODO',
}

export interface Todo {
  id: string;
  text: string;
  isDone: boolean;
  createdAt: Date;
}

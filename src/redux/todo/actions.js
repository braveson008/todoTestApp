import { actionTypes } from './actionTypes';

export const GET_TODOS_HANDLER = (payload) => ({
  type: actionTypes.GET_TODOS_HANDLER,
  payload,
});

export const ADD_TODO_HANDLER = (newTodo) => ({
  type: actionTypes.ADD_TODO_HANDLER,
  newTodo,
});

export const REMOVE_TODO_HANDLER = (id) => ({
  type: actionTypes.REMOVE_TODO_HANDLER,
  id,
});

export const UPDATE_TODO_HANDLER = (id, newText) => ({
  type: actionTypes.UPDATE_TODO_HANDLER,
  id,
  newText,
});

export const SET_USER_INFO = (information) => ({
  type: actionTypes.SET_USER_INFO,
  information,
});

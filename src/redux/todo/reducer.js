import { actionTypes } from './actionTypes';

const INITIAL_STATE = {
  todoList: [],
  userInfo: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_TODOS_HANDLER:
      return {
        ...state,
        todoList: action.payload,
      };
    case actionTypes.ADD_TODO_HANDLER:
      return {
        ...state,
        todoList: [...state.todoList, action.newTodo],
      };

    case actionTypes.REMOVE_TODO_HANDLER:
      return {
        ...state,
        todoList: state.todoList.filter((el) => el._id !== action.id),
      };
    case actionTypes.UPDATE_TODO_HANDLER:
      return {
        ...state,
        todoList: state.todoList.map((item) => (item._id === action.id
          ? {
            ...item,
            description: action.newText,
            updatedAt: new Date().toISOString().split('T')[0],
          }
          : item)),
      };
    case actionTypes.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.information,
      };
    default:
      return state;
  }
};

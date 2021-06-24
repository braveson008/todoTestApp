import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios';
import { ADD_TODO_HANDLER } from '../redux/todo/actions';

const useToDoHook = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.todo.userInfo);
  const [todoInfo, setTodoInfo] = useState({
    todoTitle: '',
    todoDesc: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const createToDoHandler = (userList, closeHandler) => {
    const { todoDesc, todoTitle } = todoInfo;

    const getChosenUsers = userList
      .filter((item) => item.chosen)
      .map((item) => ({ name: item.username, _id: item._id }));

    if (todoTitle && todoDesc) {
      axios
        .post('http://0.0.0.0:9000/todo/create_todo', {
          title: todoTitle,
          description: todoDesc,
          authorID: userInfo.user._id,
          authName: userInfo.user.username,
          assignedTo: getChosenUsers,
          createdAt: new Date().toISOString().split('T')[0],
        })
        .then((res) => {
          dispatch(ADD_TODO_HANDLER(res.data));
          closeHandler();
        });
    } else {
      setErrorMessage('Could not create To do');
    }
  };

  return [setTodoInfo, createToDoHandler, errorMessage];
};

export default useToDoHook;

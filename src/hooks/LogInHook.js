import { useState } from 'react';

import { useDispatch } from 'react-redux';
import axios from 'axios';
import { SET_USER_INFO } from '../redux/todo/actions';

const useLogInHook = () => {
  const dispatch = useDispatch();

  const [authInfo, setAuthInfo] = useState({
    username: '',
    password: '',
    errorMessage: '',
  });

  const logInHandler = (navigation) => {
    const { username, password } = authInfo;
    if (username && password) {
      axios
        .post('http://0.0.0.0:9000/auth/default_login', {
          username: username.toLowerCase(),
          password: password.toLowerCase(),
        })
        .then((res) => {
          dispatch(SET_USER_INFO(res.data));
          setAuthInfo({ ...authInfo, errorMessage: '' });
          navigation.navigate('Main');
        })
        .catch(() => setAuthInfo({ ...authInfo, errorMessage: 'Invalid login' }));
    } else {
      setAuthInfo({ ...authInfo, errorMessage: 'Invalid login' });
    }
  };

  return [authInfo, setAuthInfo, logInHandler];
};

export default useLogInHook;

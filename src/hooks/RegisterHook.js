import { useState } from 'react';

import axios from 'axios';

const useRegisterHook = () => {
  const [registerInfo, setRegisterInfo] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    errorMessage: '',
  });

  const registerHandler = (changeStatus) => {
    const { username, password, confirmPassword } = registerInfo;
    if (password !== confirmPassword) {
      return setRegisterInfo({
        ...registerInfo,
        errorMessage: 'Passwords must match',
      });
    }
    if (username && password) {
      axios
        .post('http://0.0.0.0:9000/auth/register', {
          username: username.toLowerCase(),
          password: password.toLowerCase(),
        })
        .then(() => {
          changeStatus(true);
        })
        .catch((e) => {
          setRegisterInfo({
            ...registerInfo,
            errorMessage: e.message,
          });
        });

      setRegisterInfo({
        ...registerInfo,
        errorMessage: '',
      });
    }
  };

  return [registerInfo, setRegisterInfo, registerHandler];
};

export default useRegisterHook;

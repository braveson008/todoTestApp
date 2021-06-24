import React from 'react';
import { View, Text } from 'react-native';

import AuthenticationInput from '../AuthenticationInput/AuthenticationInput';
import AuthenticationButton from '../AuthenticationButton/AuthenticationButton';

import LogInStyles from './LogInStyles';
import useLogInHook from '../../../hooks/LogInHook';

const LogIn = ({ navigation }) => {
  const [authInfo, setAuthInfo, logInHandler] = useLogInHook();

  return (
    <View style={LogInStyles.Container}>
      <AuthenticationInput
        updateText={(text) => setAuthInfo((prevState) => ({ ...prevState, username: text }))}
        label="Username"
      />
      <AuthenticationInput
        updateText={(text) => setAuthInfo((prevState) => ({ ...prevState, password: text }))}
        label="Password"
        secure
      />
      <Text style={LogInStyles.ErrorMessage}>
        {authInfo.errorMessage && authInfo.errorMessage}
      </Text>
      <AuthenticationButton
        onPress={() => logInHandler(navigation)}
        label="Confirm"
      />
    </View>
  );
};

export default LogIn;

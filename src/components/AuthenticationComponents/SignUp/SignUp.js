import React from 'react';
import { View, Text } from 'react-native';

import AuthenticationInput from '../AuthenticationInput/AuthenticationInput';
import AuthenticationButton from '../AuthenticationButton/AuthenticationButton';

import SignUpStyles from './SignUpStyles';

import useRegisterHook from '../../../hooks/RegisterHook';

const SignUp = ({ changeStatus }) => {
  const [registerInfo, setRegisterInfo, registerHandler] = useRegisterHook();
  return (
    <View style={SignUpStyles.Container}>
      <AuthenticationInput
        updateText={(text) => setRegisterInfo((prevState) => ({ ...prevState, username: text }))}
        label="Username"
      />
      <AuthenticationInput
        updateText={(text) => setRegisterInfo((prevState) => ({ ...prevState, password: text }))}
        label="Password"
        secure
      />
      <AuthenticationInput
        updateText={(text) => setRegisterInfo((prevState) => ({ ...prevState, confirmPassword: text }))}
        label="Confirm Password"
        secure
      />
      <Text style={SignUpStyles.ErrorMessage}>
        {registerInfo.errorMessage && registerInfo.errorMessage}
      </Text>
      <AuthenticationButton
        onPress={() => registerHandler(changeStatus)}
        label="Confirm"
      />
    </View>
  );
};

export default SignUp;

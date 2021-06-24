import React from 'react';
import { TextInput } from 'react-native';

import AuthenticationInputStyles from './AuthenticationInputStyles';

const AuthenticationInput = ({
  label, secure, updateText, isMulti,
}) => (
  <TextInput
    onChangeText={(text) => updateText(text)}
    style={[
      AuthenticationInputStyles.MainContainer,
      isMulti && { height: 150 },
    ]}
    secureTextEntry={secure}
    placeholder={`${label}`}
    multiline={isMulti}
  />
);

export default AuthenticationInput;

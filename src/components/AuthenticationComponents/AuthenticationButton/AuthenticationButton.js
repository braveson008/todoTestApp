import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import AuthenticationButtonStyles from './AuthenticationButtonStyles';

const AuthenticationButton = ({ label, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={AuthenticationButtonStyles.MainContainer}
  >
    <Text style={AuthenticationButtonStyles.ButtonText}>{`${label}`}</Text>
  </TouchableOpacity>
);

export default AuthenticationButton;

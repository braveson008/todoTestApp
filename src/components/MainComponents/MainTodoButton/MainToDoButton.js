import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import MainTodoButtonStyles from './MainToDoButtonStyles';

const MainToDoButton = ({ label, onPress }) => (
  <TouchableOpacity
    style={MainTodoButtonStyles.MainContainer}
    onPress={onPress}
  >
    <Text style={MainTodoButtonStyles.ButtonText}>{label}</Text>
  </TouchableOpacity>
);

export default MainToDoButton;

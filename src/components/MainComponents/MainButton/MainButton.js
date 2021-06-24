import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import MainButtonStyles from './MainButtonStyles';

const MainButton = ({ label, onPress }) => (
  <TouchableOpacity
    style={MainButtonStyles.ButtonContainer}
    onPress={onPress}
  >
    <Text style={MainButtonStyles.ButtonText}>{label}</Text>
  </TouchableOpacity>
);

export default MainButton;

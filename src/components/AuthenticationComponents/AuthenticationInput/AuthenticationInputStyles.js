import { StyleSheet, Dimensions } from 'react-native';

const AuthenticationInputStyles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#EEEEEE',
    width: '85%',
    height: 45,
    marginTop: 25,
    paddingLeft: 15,
    color: '#222222',
    fontSize: Dimensions.get('screen').fontScale * 14,
    fontWeight: '500',
    letterSpacing: 1,
  },
});

export default AuthenticationInputStyles;

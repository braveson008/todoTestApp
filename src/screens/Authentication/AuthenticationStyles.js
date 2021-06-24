import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const AuthenticationStyles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#fff',
    width,
    height,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    fontSize: 45,
    opacity: 0.5,
    fontWeight: '500',
    letterSpacing: 1,
  },
  ButtonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default AuthenticationStyles;

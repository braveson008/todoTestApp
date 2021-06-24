import { StyleSheet } from 'react-native';

const AuthenticationButtonStyles = StyleSheet.create({
  MainContainer: {
    width: '45%',
    height: 40,
    backgroundColor: 'royalblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'transparent',
    marginTop: '5%',
  },
  ButtonText: {
    color: '#fff',
    letterSpacing: 2,
    fontWeight: '500',
    fontSize: 15,
  },
});

export default AuthenticationButtonStyles;

import { StyleSheet } from 'react-native';

const MainButtonStyles = StyleSheet.create({
  ButtonContainer: {
    width: '95%',
    backgroundColor: 'royalblue',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'transparent',
  },
  ButtonText: {
    color: 'white',
    fontSize: 18,
    letterSpacing: 3,
    fontWeight: '600',
  },
});

export default MainButtonStyles;

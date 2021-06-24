import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const MainStyles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#fff',
    width,
    height,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  MainList: {
    width: '95%',
    alignSelf: 'center',
    height: height / 1.25,
    flexGrow: 0,
    marginTop: '5%',
    alignContent: 'center',
  },
  ErrorMessage: {
    color: 'red',
    letterSpacing: 2,
    fontSize: 17,
    marginTop: 10,
  },
  ModalView: {
    paddingHorizontal: 50,
    paddingVertical: '10%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    height,
  },
});

export default MainStyles;

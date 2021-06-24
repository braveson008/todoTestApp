import { StyleSheet } from 'react-native';

const MainTodoStyles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
    marginTop: 10,
  },
  ButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: '5%',
  },
  EditInput: {
    backgroundColor: '#AAAAAA',
    width: '80%',
    height: 45,
    marginTop: 10,
  },
  TitleContainer: {
    alignSelf: 'flex-start',
  },
  TitleText: {
    fontSize: 18,
    letterSpacing: 3,
    fontWeight: '500',
  },
  DescriptionText: {
    fontSize: 15,
    letterSpacing: 3,
    fontWeight: '500',
    marginTop: '5%',
    opacity: 0.5,
  },
  UserText: {
    fontSize: 15,
    letterSpacing: 3,
    fontWeight: '500',
    marginTop: '5%',
    opacity: 0.5,
    color: 'royalblue',
    marginLeft: 10,
  },
});

export default MainTodoStyles;

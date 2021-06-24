import { StyleSheet, Dimensions } from 'react-native';

const CreateTodoStyles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#AAA',
    alignSelf: 'center',
    width: Dimensions.get('screen').width - 35,
    borderWidth: 1,
    borderColor: 'transparent',
    padding: 10,
    alignItems: 'center',
  },
  Title: {
    alignSelf: 'center',
    opacity: 0.5,
    fontSize: 30,
    letterSpacing: 2,
  },
  UserButton: {
    width: 85,
    height: 35,
    marginLeft: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
    marginTop: 10,
  },
  UserButtonText: {
    fontSize: 15,
    letterSpacing: 2,
    fontWeight: '500',
  },
  ErrorMessage: {
    color: 'red',
    letterSpacing: 2,
    fontSize: 17,
    marginTop: 10,
  },
  AssignTo: {
    color: 'royalblue',
    letterSpacing: 2,
    fontSize: 17,
    marginTop: 10,
  },
});

export default CreateTodoStyles;

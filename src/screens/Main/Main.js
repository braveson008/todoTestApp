import React, { useEffect, useState } from 'react';
import {
  View, FlatList, Text, Modal, SafeAreaView,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import AuthenticationButton from '../../components/AuthenticationComponents/AuthenticationButton/AuthenticationButton';
import MainButton from '../../components/MainComponents/MainButton/MainButton';
import MainTodo from '../../components/MainComponents/MainTodo/MainTodo';
import CreateTodo from '../../components/MainComponents/CreateTodo/CreateTodo';
import MainStyles from './MainStyles';

import { GET_TODOS_HANDLER } from '../../redux/todo/actions';

const Main = ({ navigation }) => {
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState('');
  const [modalStatus, setModalStatus] = useState(false);

  const toDoList = useSelector((state) => state.todo.todoList);
  const userInfo = useSelector((state) => state.todo.userInfo);

  useEffect(() => {
    axios
      .get('http://0.0.0.0:9000/todo/get_todos', {
        headers: {
          'auth-token': `${userInfo.token}`,
        },
      })
      .then((res) => dispatch(GET_TODOS_HANDLER(res.data)))
      .catch(() => setErrorMessage('Network error'));
  }, []);

  return (
    <SafeAreaView style={MainStyles.MainContainer}>
      <MainButton onPress={() => setModalStatus(true)} label="Create To Do" />
      <AuthenticationButton
        onPress={() => navigation.navigate('Authentication')}
        label="Log Out"
      />
      <Modal visible={modalStatus} transparent animationType="fade">
        <View style={MainStyles.ModalView}>
          <CreateTodo closeHandler={() => setModalStatus(false)} />
        </View>
      </Modal>
      {errorMessage ? (
        <Text style={MainStyles.ErrorMessage}>{errorMessage}</Text>
      ) : (
        <FlatList
          style={MainStyles.MainList}
          data={toDoList}
          renderItem={(item) => <MainTodo item={item} />}
          keyExtractor={(item) => item._id}
        />
      )}
    </SafeAreaView>
  );
};

export default Main;

import React, { useEffect, useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
} from 'react-native';

import axios from 'axios';
import CreateTodoStyles from './CreateTodoStyles';

import AuthenticationInput from '../../AuthenticationComponents/AuthenticationInput/AuthenticationInput';
import AuthentiocationButton from '../../AuthenticationComponents/AuthenticationButton/AuthenticationButton';

import useToDoHook from '../../../hooks/ToDoHook';

const CreateTodo = ({ closeHandler }) => {
  const [setTodoInfo, createToDoHandler, errorMessage] = useToDoHook();

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios.get('http://0.0.0.0:9000/auth/get_users').then((res) => {
      const finalRes = [];
      res.data.forEach((item) => {
        finalRes.push({ ...item, chosen: false });
      });
      setUserList(finalRes);
    });
  }, []);

  const selectUsersHandler = (id) => {
    setUserList(
      userList.map((user) => (user._id === id ? { ...user, chosen: !user.chosen } : user)),
    );
  };

  return (
    <View style={CreateTodoStyles.MainContainer}>
      <Text style={CreateTodoStyles.Title}>Create Todo</Text>
      <AuthenticationInput
        updateText={(text) => setTodoInfo((prevState) => ({ ...prevState, todoTitle: text }))}
        label="Title"
      />
      <AuthenticationInput
        updateText={(text) => setTodoInfo((prevState) => ({ ...prevState, todoDesc: text }))}
        isMulti
        label="Description"
      />
      <Text style={CreateTodoStyles.AssignTo}>Assign To:</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {userList.length > 0
          && userList.map((el) => (
            <TouchableOpacity
              onPress={() => selectUsersHandler(el._id)}
              style={
                el.chosen
                  ? [
                    CreateTodoStyles.UserButton,
                    { backgroundColor: 'royalblue' },
                  ]
                  : CreateTodoStyles.UserButton
              }
              key={el._id}
            >
              <Text
                style={
                  el.chosen
                    ? [CreateTodoStyles.UserButtonText, { color: 'white' }]
                    : CreateTodoStyles.UserButtonText
                }
              >
                {el.username}
              </Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
      {errorMessage ? (
        <Text style={CreateTodoStyles.ErrorMessage}>{errorMessage}</Text>
      ) : null}

      <AuthentiocationButton
        label="Create"
        onPress={() => createToDoHandler(userList, closeHandler)}
      />
    </View>
  );
};

export default CreateTodo;

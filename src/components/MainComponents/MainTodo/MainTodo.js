import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';

import axios from 'axios';

import {useDispatch, useSelector} from 'react-redux';
import MainTodoStyles from './MainTodoStyles';

import MainToDoButton from '../MainTodoButton/MainToDoButton';

import {
  REMOVE_TODO_HANDLER,
  UPDATE_TODO_HANDLER,
} from '../../../redux/todo/actions';

const MainTodo = ({item}) => {
  const {
    description,
    _id,
    authorID,
    authName,
    title,
    updatedAt,
    createdAt,
    assignedTo,
  } = item.item;
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.todo.userInfo);

  const [editStatus, setEditStatus] = useState(false);
  const [newText, setNewText] = useState('');

  const updateToDoDesc = () => {
    if (newText) {
      axios
        .put('http://0.0.0.0:9000/todo/update_todo', {
          id: _id,
          description: newText,
          updatedAt: new Date().toISOString().split('T')[0],
        })
        .then(() => {
          dispatch(UPDATE_TODO_HANDLER(_id, newText));
          setEditStatus(false);
        });
    }
  };

  const removeToDoHandler = () => {
    axios.delete(`http://0.0.0.0:9000/todo/remove_todo/${_id}`).then(() => {
      dispatch(REMOVE_TODO_HANDLER(_id));
    });
  };

  return (
    <View style={MainTodoStyles.MainContainer}>
      <View style={MainTodoStyles.TitleContainer}>
        <Text style={MainTodoStyles.TitleText}>
          Title:
          {title}
        </Text>
        <Text style={MainTodoStyles.TitleText}>
          Author:
          {authName}
        </Text>
        <Text style={MainTodoStyles.TitleText}>
          Created:
          {createdAt}
        </Text>
        {updatedAt && (
          <Text style={MainTodoStyles.TitleText}>
            Updated:
            {updatedAt}
          </Text>
        )}
      </View>

      {assignedTo.length > 0 && (
        <Text style={MainTodoStyles.UserText}>Assigned to:</Text>
      )}
      {assignedTo.length > 0 && (
        <ScrollView horizontal>
          {assignedTo.map(user => (
            <Text style={MainTodoStyles.UserText} key={user._id}>
              {user.name}
            </Text>
          ))}
        </ScrollView>
      )}

      {editStatus ? (
        <TextInput
          style={MainTodoStyles.EditInput}
          defaultValue={`${description}`}
          onChangeText={text => setNewText(text)}
          multiline
        />
      ) : (
        <Text style={MainTodoStyles.DescriptionText}>
          Description:
          {description}
        </Text>
      )}

      {userInfo.user._id === authorID && (
        <View style={MainTodoStyles.ButtonsContainer}>
          {editStatus ? (
            <>
              <MainToDoButton onPress={() => updateToDoDesc()} label="Submit" />
              <MainToDoButton
                onPress={() => setEditStatus(false)}
                label="Cancel"
              />
            </>
          ) : (
            <>
              <MainToDoButton
                onPress={() => setEditStatus(true)}
                label="Edit"
              />
              <MainToDoButton
                onPress={() => removeToDoHandler()}
                label="Delete"
              />
            </>
          )}
        </View>
      )}
    </View>
  );
};

export default MainTodo;

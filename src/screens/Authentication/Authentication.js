import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import LogIn from '../../components/AuthenticationComponents/LogIn/LogIn';
import SignUp from '../../components/AuthenticationComponents/SignUp/SignUp';
import AuthenticationButton from '../../components/AuthenticationComponents/AuthenticationButton/AuthenticationButton';

import AuthenticationStyles from './AuthenticationStyles';

const Authentication = ({ navigation }) => {
  const [logInPhase, setLogInPhase] = useState(true);
  return (
    <SafeAreaView style={AuthenticationStyles.MainContainer}>
      <Text style={AuthenticationStyles.Title}>Welcome</Text>
      <View style={AuthenticationStyles.ButtonContainer}>
        <AuthenticationButton
          onPress={() => {
            setLogInPhase(true);
          }}
          label="Log In"
        />
        <AuthenticationButton
          onPress={() => setLogInPhase(false)}
          label="Sign Up"
        />
      </View>
      {logInPhase && <LogIn navigation={navigation} />}
      {!logInPhase && <SignUp changeStatus={setLogInPhase} />}
    </SafeAreaView>
  );
};

export default Authentication;

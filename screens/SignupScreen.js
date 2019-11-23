import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const SignupScreen = props => {
  const [enteredUsername, setUsername] = useState('');
  const [enteredPassword, setPassword] = useState('');

  const changeUsername = (text) => {
    setUsername(text);
  }
  const changePassword = (text) => {
    setPassword(text);
  }

  const login = () => {
    console.log('username:' + enteredUsername);
    console.log('password:' + enteredPassword);
  }

  return (
    <View style={styles.login}>
      <View style={styles.inputContainer}>
        <Text>Username: </Text>
        <TextInput 
          placeholder="Enter your username here"
          style={styles.input}
          onChangeText={changeUsername}
          value={enteredUsername}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Password: </Text>
        <TextInput 
          placeholder="Enter your password here"
          style={styles.input}
          onChangeText={changePassword}
          value={enteredPassword}
        />
      </View>
      <Button title="Login" onPress={login}/>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    padding: 40
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5
  },
  input: { 
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 5 
  }
});

export default SignupScreen;
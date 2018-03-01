import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

class AuthView extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <LoginForm />
        <SignupForm />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1
  }
};

export default AuthView;

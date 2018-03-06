import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Row } from '../common';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Header from './Header';

class AuthView extends Component {
  constructor() {
    super();

    this.state = {
      page: 0
    };
  }

  onPressHeader() {
    const page = ++this.state.page % 2;
    this.setState({
      page
    });
  }

  render() {
    const { headerStyle, formsStyle } = styles;
    const { page } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={headerStyle}>
          <Header
            page={this.state.page}
            onPressEvent={this.onPressHeader.bind(this)}
          />
        </View>
        <View style={formsStyle}>
          {page === 0 && <LoginForm />}
          {page === 1 && <SignupForm />}
        </View>
      </View>
    );
  }
}

const styles = {
  headerStyle: {
    flex: 1,
  },
  formsStyle: {
    flex: 7
  }
};

export default AuthView;

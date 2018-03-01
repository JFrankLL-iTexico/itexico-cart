import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Container, Row, Input, Button } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <Container>
        <Row>
          <Input
            value={this.props.email}
            icon="user"
            placeholder="mail@mail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </Row>

        <Row>
          <Input
            secureTextEntry
            value={this.props.password}
            icon="lock"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </Row>

        <Row>
          <Button
            onPress={() => {}}
          >
            LOGIN
          </Button>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);

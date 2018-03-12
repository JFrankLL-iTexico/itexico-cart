import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {
  usernameChanged,
  emailChanged,
  phoneChanged,
  passwordChanged,
  signInUser
} from '../../actions';
import { Container, Row, Input, Button } from '../common';

class SignupForm extends Component {
  onUsernameChange(text) {
    this.props.usernameChanged(text);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPhoneChange(text) {
    this.props.phoneChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.signInUser({ email, password });
  }

  render() {
    return (
      <Container>
        <Row>
          <Input
            value={this.props.username}
            icon="user"
            placeholder="User name"
            onChangeText={this.onUsernameChange.bind(this)}
          />
        </Row>

        <Row>
          <Input
            value={this.props.email}
            icon="envelope"
            placeholder="Email"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </Row>

        <Row>
          <Input
            value={this.props.phone}
            icon="screen-smartphone"
            placeholder="Mobile Number"
            onChangeText={this.onPhoneChange.bind(this)}
          />
        </Row>

        <Row>
          <Input
            secureTextEntry
            value={this.props.password}
            icon="lock"
            placeholder="Password"
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </Row>

        <Row>
          <Button
            onPress={this.onButtonPress.bind(this)}
          >
            REGISTER
          </Button>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { username, email, phone, password, error, loading } = auth;

  return { username, email, phone, password, error, loading };
};

export default connect(mapStateToProps, {
  usernameChanged,
  emailChanged,
  phoneChanged,
  passwordChanged,
  signInUser
})(SignupForm);

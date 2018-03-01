import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false
    };
  }

  onInputFocus() {
    this.setState({ focused: true });
  }

  onInputBlur() {
    this.setState({ focused: false });
  }

  render() {
    const { icon, label, value, onChangeText, placeholder, secureTextEntry } = this.props;
    const { focusedStyle, containerStyle } = styles;
    let { inputStyle, iconStyle } = styles;
    if (this.state.focused) {
      inputStyle = { ...inputStyle, ...focusedStyle };
      iconStyle = { ...iconStyle, ...focusedStyle };
    }
    return (
      <View style={containerStyle}>
        <Icon name={icon} style={iconStyle} />
        <TextInput
          style={inputStyle}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          value={value}
          autoCorrect={false}
          onChangeText={onChangeText}
          onFocus={this.onInputFocus.bind(this)}
          onBlur={this.onInputBlur.bind(this)}
        />
      </View>
    );
  }
}

const styles = {
  focusedStyle: {
    color: '#6dc9ed',
    borderBottomColor: '#6dc9ed',
  },
  inputStyle: {
    padding: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 9,
    color: '#bbb',
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
  },
  iconStyle: {
    fontSize: 20,
    color: '#bbb',
    padding: 5,
    flex: 1,
    textAlign: 'center'
  },
  labelStyle: {
    padding: 5,
    marginRight: 10,
    fontSize: 18,
    color: '#ccc'
  },
  containerStyle: {
    height: 'auto',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  },
};

export { Input };

import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Row } from '.';

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

  renderMiniTag(text) {
    const { miniTagStyle } = styles;
    let style = { color: '#00000000' };

    if (this.state.focused) {
      style = { ...miniTagStyle };
    }

    return (
      <Text
        style={style}
      >
        { text }
      </Text>
    );
  }

  render() {
    const { icon, label, value, onChangeText, placeholder, secureTextEntry } = this.props;
    const { focusedStyle, containerStyle, secureIconStyle } = styles;
    let { inputStyle, iconStyle } = styles;
    if (this.state.focused) {
      inputStyle = { ...inputStyle, ...focusedStyle };
      iconStyle = { ...iconStyle, ...focusedStyle };
    }
    return (
      <View style={containerStyle}>
        <Row>
          {this.renderMiniTag(placeholder)}
        </Row>
        <Row>
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
          {secureTextEntry &&
            <Icon name="eye" style={{ ...iconStyle, ...secureIconStyle }} />
          }
        </Row>
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
    flex: 1,
    textAlign: 'center'
  },
  secureIconStyle: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    margin: 'auto'
  },
  labelStyle: {
    padding: 5,
    marginRight: 10,
    fontSize: 18,
    color: '#ccc'
  },
  miniTagStyle: {
    flex: 1,
    marginLeft: 32,
    fontSize: 14,
    color: '#bbb',
    textAlign: 'left'
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
    marginBottom: 32
  },
};

export { Input };

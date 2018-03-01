import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const {
    buttonStyle,
    textStyle
  } = styles;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyle}
    >
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 13,
    fontWeight: '900'
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#4eade7',
    borderRadius: 32,
    paddingTop: 16,
    paddingBottom: 16,
    margin: 5
  }
};

export { Button };

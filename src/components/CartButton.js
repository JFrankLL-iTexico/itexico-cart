import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CartButton = ({ onPress, text, total }) => {
  const {
    buttonStyle,
    textStyle
  } = styles;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
      <Text style={textStyle}>$ {Number(total).toFixed(2)}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 13,
    fontWeight: '900',
    paddingHorizontal: 10,
    borderRightWidth: 1,
    borderColor: '#fff'
  },
  buttonStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#4eade7',
    borderRadius: 32,
    paddingVertical: 16,
    margin: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginHorizontal: 'auto',
  }
};

export default CartButton;

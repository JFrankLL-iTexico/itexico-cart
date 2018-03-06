import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

class BagIcon extends Component {
  render() {
    const { containerStyle, tabbedIconStyle, numberStyle, numberTextStyle } = styles;

    let auxStyle = { };

    if (this.props.tab) {
      auxStyle = { ...tabbedIconStyle };
    }

    return (
      <View style={containerStyle}>
        <Icon
          name="handbag"
          size={18}
          style={auxStyle}
        />
        <View style={numberStyle}>
          <Text style={numberTextStyle}>10</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    position: 'relative'
  },
  iconStyle: {
    //margin: 'auto'
    padding: 10,
  },
  tabbedIconStyle: {
    fontSize: 24,
    color: '#8f8f8f',
    position: 'absolute',
    top: -14,
    left: -12
  },
  numberStyle: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'green',
    borderRadius: 50,
    padding: 2
  },
  numberTextStyle: {
    color: '#fff',
    fontSize: 12
  }
};

export default BagIcon;

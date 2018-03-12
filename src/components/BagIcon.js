import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
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
          <Text style={numberTextStyle}>{this.props.quantity}</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    width: 30,
    height: 30
  },
  iconStyle: {
    //margin: 'auto'
    padding: 10,
  },
  tabbedIconStyle: {
    fontSize: 24,
    color: '#8f8f8f',
    position: 'absolute'
  },
  numberStyle: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#64bb54',
    borderRadius: 50,
    padding: 3
  },
  numberTextStyle: {
    color: '#fff',
    fontSize: 12
  }
};

const mapStateToProps = ({ cart }) => {
  const { items } = cart;
  const quantity = items.length;

  return { quantity };
};

export default connect(mapStateToProps, null)(BagIcon);

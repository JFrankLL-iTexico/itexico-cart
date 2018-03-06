import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { addItemToCart } from '../actions';

class Cart extends Component {
  render() {
    return (
      <View>
        <Text>Cart</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ cart }) => {
  const { items } = cart;

  return { items };
};

export default connect(mapStateToProps, {
  addItemToCart
})(Cart);

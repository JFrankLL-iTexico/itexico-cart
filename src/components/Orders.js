import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { addItemToCart } from '../actions';

class Orders extends Component {
  render() {
    return (
      <View>
        <Text>Orders</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  addItemToCart
})(Orders);

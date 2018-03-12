import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchOrderProducts } from '../actions';
import CartList from './CartList';

class OrderDetail extends Component {
  render() {
    return (
      // <View>
      //   {this.props.products.map(product => <Text>{product.price}</Text>)}
      // </View>
      <CartList
        items={this.props.products}
      />
    );
  }
}

const mapStateToProps = ({ orders }) => {
  const { products } = orders;

  return { products };
};

export default connect(mapStateToProps, {
  fetchOrderProducts
})(OrderDetail);

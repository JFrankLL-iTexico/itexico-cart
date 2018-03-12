import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { addItemToCart, updateItemQty, createOrder } from '../actions';
import CartList from './CartList';
import CartButton from './CartButton';
import { Row } from './common';

class Cart extends Component {
  getTotalCost() {
    const itemsList = this.props.items.slice(0);
    let sum = 0;
    for (const item of itemsList) {
      sum += item.quantity * item.price;
    }
    return sum;
  }

  createOrder() {
    const order = {
      status: 'pending',
      products: this.props.items.map(elt => {
        elt.product = elt._id;
        return elt;
      }),
      client_id: '5a8b4a7bcd6dd4029ea52925'
    };
    this.props.createOrder(order);
  }

  render() {
    const { items } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <CartList
          updateItemQty={this.props.updateItemQty.bind(this)}
          items={items}
        />
        <Row>
          <CartButton
            text="PLACE THIS ORDER"
            total={this.getTotalCost()}
            onPress={this.createOrder.bind(this)}
          />
        </Row>
      </View>
    );
  }
}

const mapStateToProps = ({ cart }) => {
  const { items } = cart;

  return { items };
};

export default connect(mapStateToProps, {
  addItemToCart,
  updateItemQty,
  createOrder
})(Cart);

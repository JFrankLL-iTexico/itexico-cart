import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { addItemToCart, removeItemFromCart, updateItemQty, createOrder } from '../actions';
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
      client_id: this.props.clientId
    };
    this.props.createOrder(order);
  }

  renderButton() {
    if (this.props.items.length) {
      return (
        <CartButton
          text="PLACE THIS ORDER"
          total={this.getTotalCost()}
          onPress={this.createOrder.bind(this)}
        />
      );
    }
  }

  render() {
    const { items } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <CartList
          updateItemQty={this.props.updateItemQty.bind(this)}
          removeItem={this.props.removeItemFromCart.bind(this)}
          items={items.slice()}
        />
        <Row>
          {this.renderButton()}
        </Row>
      </View>
    );
  }
}

const mapStateToProps = ({ cart, auth }) => {
  const { items } = cart;
  const { clientId } = auth;

  return { items, clientId };
};

export default connect(mapStateToProps, {
  addItemToCart,
  removeItemFromCart,
  updateItemQty,
  createOrder
})(Cart);

import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import CartItem from './CartItem';

class CartList extends Component {
  renderItems() {
    return this.props.items.map((item, idx) =>
      <CartItem
        key={`cartItem-${idx}`}
        updateItemQty={this.props.updateItemQty ? this.props.updateItemQty.bind(this) : null}
        {...item}
      />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderItems()}
      </ScrollView>
    );
  }
}

const styles = {};

export default CartList;

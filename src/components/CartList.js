import React, { Component } from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import CartItem from './CartItem';

class CartList extends Component {
  render() {
    return (
      <FlatList
        style={{}}
        data={this.props.items}
        renderItem={({ item }) =>
          <CartItem
            updateItemQty={this.props.updateItemQty ? this.props.updateItemQty.bind(this) : null}
            remove={this.props.updateItemQty ? this.props.removeItem.bind(this) : null}
            {...item}
          />
        }
        keyExtractor={item => `cartItem-${item._id}`}
      />
    );
  }
}

const styles = {};

export default CartList;

/*
import React, { Component } from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import CartItem from './CartItem';

class CartList extends Component {
  renderItems() {
    return this.props.items.map((item, idx) =>
      <CartItem
        key={`cartItem-${idx}`}
        updateItemQty={this.props.updateItemQty ? this.props.updateItemQty.bind(this) : null}
        remove={this.props.updateItemQty ? this.props.removeItem.bind(this) : null}
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

*/
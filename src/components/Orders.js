import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { addItemToCart, fetchOrders } from '../actions';

const Order = props => {
  const { date, _id } = props;
  return (
    <TouchableOpacity
      onPress={() => {}}
    >
      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: '#c5c5c5',
          padding: 12,
          backgroundColor: '#fff'
        }}
      >
        <View style={{ flex: 9 }}>
          <Text style={{ color: '#898989' }}>{ date }</Text>
          <Text style={{ color: '#c5c5c5' }}>Order id #{ _id }</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="arrow-right" size={12} style={{ color: '#3a3a3a' }} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

class Orders extends Component {
  componentWillMount() {
    const id = '5a8b4a7bcd6dd4029ea52925';
    this.props.fetchOrders(id);
  }

  renderOrders() {
    return this.props.orderList.slice().map((order, idx) => {
      return (
        <Order
          key={`order-${idx}`}
          {...order}
        />
      );
    });
  }

  render() {
    return (
      <View>
        {this.renderOrders()}
      </View>
    );
  }
}

const mapStateToProps = ({ orders }) => {
  const { orderList } = orders;

  return { orderList };
};

export default connect(mapStateToProps, {
  addItemToCart,
  fetchOrders
})(Orders);

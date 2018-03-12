import React, { Component } from 'react';
import { ScrollView, } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { fetchItems, addItemToCart } from '../actions';
import Product from './Product';

class ProductList extends Component {
  componentWillMount() {
    this.fetchItems();
  }

  onPressAddToCartButton(product) {
    //Actions.productDetail();
    this.props.addItemToCart(product);
  }

  fetchItems() {
    this.props.fetchItems();
  }

  renderProducts() {
    return this.props.items.map((item, idx) =>
      <Product
        key={`product-${idx}`} product={item}
        addToCart={this.onPressAddToCartButton.bind(this)}
      />
    );
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.listStyle}>
        {this.renderProducts()}
      </ScrollView>
    );
  }
}

const styles = {
  listStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
};

const mapStateToProps = ({ products }) => {
  const { items } = products;

  return { items };
};

export default connect(mapStateToProps, {
  fetchItems,
  addItemToCart
})(ProductList);

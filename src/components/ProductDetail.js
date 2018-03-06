import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Container, Row } from './common';
import BagIcon from './BagIcon';

class ProductDetail extends Component {
  render() {
    const {
      containerStyle,
      backToolStyle,
      bagToolStyle
    } = styles;

    return (
      <View style={containerStyle}>
        <View style={backToolStyle}>
          <Icon name="arrow-left" size={18} style={{ padding: 10 }} />
        </View>
        <View style={bagToolStyle}>
          <BagIcon />
        </View>
        <Container>
          <Row>
            <Text>Image</Text>
          </Row>
          <Row>
            <Text>Title</Text>
          </Row>
          <Row>
            <Text>Price</Text>
          </Row>
        </Container>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    position: 'relative',
    paddingTop: 20
  },
  backToolStyle: {
    backgroundColor: 'red',
    marginTop: 20,
    position: 'absolute',
    top: 0,
    left: 0
  },
  bagToolStyle: {
    backgroundColor: 'blue',
    marginTop: 20,
    position: 'absolute',
    top: 0,
    right: 0
  },
};

export default ProductDetail;

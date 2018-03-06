import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Row, Container } from './common';

const Product = (props) => {
  const {
    _id,
    stock,
    price,
    name,
    imageUrl,
    description,
    category
  } = props.product;
  const {
    containerStyle,
    imageStyle,
    bottomWrapper,
    bottomRowStyle,
    bottomTextStyle,
    topTextStyle,
    priceTextStyle
  } = styles;

  return (
    <View style={containerStyle}>
      <Container>
        <Row>
          <Image
            style={imageStyle}
            source={{ uri: imageUrl }}
          />
        </Row>

        <Row>
          <View style={bottomWrapper}>
            <Row>
              <Text style={topTextStyle}>{name}</Text>
            </Row>

            <Row>
              <View style={bottomRowStyle}>
                <View>
                  <Text style={{ ...bottomTextStyle, ...priceTextStyle }}>$ {price}</Text>
                </View>
                <View>
                  <TouchableOpacity
                    style={{ flex: 1, alignSelf: 'stretch' }}
                    onPress={() => props.addToCart(props.product)}
                  >
                    <Text style={bottomTextStyle}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Row>
          </View>
        </Row>
      </Container>
    </View>
  );
};

const styles = {
  containerStyle: {
    width: 180,
    margin: 3,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 3,
  },
  imageStyle: {
    height: 150,
    flex: 1,
    width: 150
  },
  bottomWrapper: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: '#b7b7b7',
    padding: 10
  },
  topTextStyle: {
    fontSize: 14,
    color: '#7d7d7d'
  },
  priceTextStyle: {
    fontSize: 16
  },
  bottomRowStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bottomTextStyle: {
    color: '#4eade7'
  }
};

export default Product;

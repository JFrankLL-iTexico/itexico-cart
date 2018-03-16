import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Swipeout from 'react-native-swipeout';
import { Row, Container } from './common';

const onPlusPress = ({ updateItemQty, _id, quantity }) => {
  updateItemQty(_id, quantity + 1);
};

const onMinusPress = ({ updateItemQty, _id, quantity }) => {
  updateItemQty(_id, quantity + (quantity > 1 ? -1 : 0));
};

const renderControls = (quantity, props) => {
  const {
    numberWrapperStyle,
    inputStyle,
    numberControlStyle
  } = styles;
  return (
    <View style={numberWrapperStyle}>
      <TouchableOpacity onPress={() => onPlusPress(props)}>
        <View><Text style={numberControlStyle}>+</Text></View>
      </TouchableOpacity>
      <View>
        <TextInput
          keyboardType="numeric"
          style={inputStyle}
          value={quantity.toString()}
          autoCorrect={false}
        />
      </View>
      <TouchableOpacity onPress={() => onMinusPress(props)}>
        <View><Text style={numberControlStyle}>-</Text></View>
      </TouchableOpacity>
    </View>
  );
};

const renderRemoveButton = (id, props) => {
  const { removeButtonStyle } = styles;
  return (
    <TouchableOpacity style={removeButtonStyle} onPress={() => props.remove(id)}>
      <View>
        <Icon
          name="trash"
          size={24}
          style={{ color: '#9a9a9a' }}
        />
      </View>
    </TouchableOpacity>
  );
};

const CartItem = (props) => {
  const {
    name,
    imageUrl,
    category,
    description,
    price,
    quantity,
    stock,
    _id
  } = props;
  const {
    containerStyle,
    imageStyle,
    bodyWrapperStyle,
    titleTextStyle,
    tagStyle,
    priceStyle,
    altPriceStyle
  } = styles;

  const swipeSettimgs = {
    autoclose: true,
    left: [{
      onPress: () => props.remove(_id),
      text: 'Delete',
      type: 'delete'
    }]
  };

  return (
    <Swipeout {...swipeSettimgs}>
      <Container>
        <View style={containerStyle}>
          <Row>
            {/* {props.updateItemQty && renderRemoveButton(_id, props)} */}
            <Image
              style={imageStyle}
              source={{ uri: imageUrl }}
            />
            <View style={bodyWrapperStyle}>
              <Text style={titleTextStyle}>{name}</Text>
              <Row>
                <Text style={tagStyle}>{category}</Text>
                <Text style={tagStyle}>Stock: {stock}</Text>
              </Row>
              <Row>
                <Text style={priceStyle}>$ {price}</Text>
                <Text style={altPriceStyle}>$ 4999</Text>
              </Row>
            </View>
            {props.updateItemQty && renderControls(quantity, props)}
          </Row>
        </View>
      </Container>
    </Swipeout>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#d8d8d8',
  },
  imageStyle: {
    flex: 2.5,
    height: 100,
    borderWidth: 1,
    borderColor: '#d8d8d8',
    margin: 10,
  },
  bodyWrapperStyle: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingVertical: 10
  },
  titleTextStyle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#7c7c7c'
  },
  tagStyle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#a7a7a7'
  },
  priceStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '800',
    color: '#4eade7'
  },
  altPriceStyle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '800',
    color: '#a7a7a7',
    textDecorationLine: 'line-through'
  },
  numberWrapperStyle: {
    flex: 1.5,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  numberControlStyle: {
    width: 55,
    fontSize: 20,
    color: '#a7a7a7',
    textAlign: 'center'
  },
  inputStyle: {
    borderWidth: 0.5,
    borderColor: '#a7a7a7',
    borderRadius: 50,
    fontSize: 20,
    padding: 5,
    paddingHorizontal: 6,
    width: 55,
    color: '#4eade7',
    textAlign: 'center'
  },
  removeButtonStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 5
  }
};

export default CartItem;

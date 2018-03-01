import React from 'react';
import { View } from 'react-native';

const Row = (props) => {
  return (
    <View
      style={style.containerStyle}
    >
      {props.children}
    </View>
  );
};

const style = {
  containerStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export { Row };

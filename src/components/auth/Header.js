import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Block = ({ highlighted }) => {
  let blockStyle = { ...styles.blockStyle };

  if (highlighted) {
    blockStyle = {
      ...blockStyle,
      ...styles.blockHighlightStyle
    };
  }

  return (
    <View style={blockStyle} />
  );
};

class Header extends Component {
  constructor() {
    super();
    this.state = {
      titles: ['Sign in', 'Sign up']
    };
  }

  onPress() {
    this.props.onPressEvent();
  }

  render() {
    const {
      textStyle,
      viewStyle,
      blockContainerStyle
    } = styles;

    const currentPage = this.props.page;
    const currentTitle = this.state.titles[currentPage];

    return (
      <TouchableOpacity
        style={{ flex: 1, alignSelf: 'stretch' }}
        onPress={this.onPress.bind(this)}
      >
        <View style={viewStyle}>
          <Text style={textStyle}>{currentTitle}</Text>
          <View style={blockContainerStyle}>
            <Block highlighted={currentPage === 0} />
            <Block highlighted={currentPage === 1} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 'auto',
    padding: 5
  },
  textStyle: {
    margin: 8,
    fontSize: 32,
    color: '#383838'
  },
  blockContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  blockStyle: {
    height: 3,
    width: 35,
    margin: 2,
    borderRadius: 10,
    backgroundColor: '#bbb'
  },
  blockHighlightStyle: {
    backgroundColor: '#68bd5d'
  }
};

export default Header;

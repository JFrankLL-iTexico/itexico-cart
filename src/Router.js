import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { logoutUser } from './actions';
import AuthView from './components/auth/AuthView';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Orders from './components/Orders';
import BagIcon from './components/BagIcon';

const TabIcon = ({ selected, iconName }) => {
  const iconStyle = {
    fontSize: 24,
    color: '#8f8f8f',
  };
  return (
    <Icon name={iconName} style={iconStyle} />
  );
};

class RouterComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Router>
          <Scene key="root" hideNavBar>
            <Scene key="auth">
              <Scene initial hideNavBar key="auth" component={AuthView} title="Home" />
            </Scene>
            <Scene key="main">
              <Scene hideNavBar key="productDetail" component={ProductDetail} />

              <Scene initial hideNavBar tabs key="tabbar" style={{ backgroundColor: '#333' }} >
                <Scene key="tab-home" title="Home" iconName="home" icon={TabIcon}>
                  <Scene
                    key="productList"
                    component={ProductList}
                    title="iTexico Products"
                    rightTitle="Logout"
                    onRight={this.props.logoutUser.bind(this)}
                  />
                </Scene>

                <Scene
                  key="tab-cart"
                  title="Cart"
                  icon={BagIcon}
                  tab
                >
                  <Scene
                    key="cart"
                    component={Cart}
                    title="Shopping Bag"
                    rightTitle="Logout"
                    onRight={this.props.logoutUser.bind(this)}
                  />
                </Scene>

                <Scene key="tab-orders" title="Orders" iconName="user" icon={TabIcon}>
                  <Scene
                    key="orders"
                    component={Orders}
                    title="My Orders"
                    rightTitle="Logout"
                    onRight={this.props.logoutUser.bind(this)}
                  />
                </Scene>
              </Scene>
            </Scene>
          </Scene>
        </Router>
      </View>
    );
  }
}

export default connect(null, { logoutUser })(RouterComponent);

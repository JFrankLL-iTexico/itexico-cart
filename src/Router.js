import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';
import { connect } from 'react-redux';
import AuthView from './components/auth/AuthView';
import ProductList from './components/ProductList';
import { logoutUser } from './actions';

const TabIcon = ({ selected, title }) => {
  return (
    <Text
      style={{ color: selected ? 'green' : 'black' }}
    >
      {title}
    </Text>
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

              <Scene hideNavBar tabs key="tabbar" >
                <Scene key="osu" title="1" icon={TabIcon}>
                  <Scene
                    key="productList"
                    component={ProductList}
                    title="1"
                    rightTitle="Logout"
                    onRight={this.props.logoutUser.bind(this)}
                  />
                </Scene>

                <Scene key="tab-2" title="tab-2" icon={TabIcon}>
                  <Scene
                    key="tab-2-content"
                    component={() => <View><Text>tab2</Text></View>}
                    title="2"
                    rightTitle="Logout"
                    onRight={this.props.logoutUser.bind(this)}
                  />
                </Scene>

                <Scene key="tab-3" title="tab-3" icon={TabIcon}>
                  <Scene
                    key="tab-3-content"
                    component={() => <View><Text>tab3</Text></View>}
                    title="3"
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

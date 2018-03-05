import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
import FooterNav from './components/FooterNav';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCve92WNRyB4PTkHb-Gm94BUqjIqXnBe8Y',
      authDomain: 'auth-49546.firebaseapp.com',
      databaseURL: 'https://auth-49546.firebaseio.com',
      projectId: 'auth-49546',
      storageBucket: 'auth-49546.appspot.com',
      messagingSenderId: '596622879944'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

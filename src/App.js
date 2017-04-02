import React from 'react';
import { Provider,  } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import Router from './Router';

class App extends React.Component {
  componentWillMount () {
    var config = {
      apiKey: "AIzaSyD06_UupI9wqIucUXPMYIDjLgwJ65kd5B0",
      authDomain: "manager-4a51b.firebaseapp.com",
      databaseURL: "https://manager-4a51b.firebaseio.com",
      projectId: "manager-4a51b",
      storageBucket: "manager-4a51b.appspot.com",
      messagingSenderId: "840025920784"
    };
    firebase.initializeApp(config);
  }
  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

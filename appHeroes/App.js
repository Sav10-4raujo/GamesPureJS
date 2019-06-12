import React, {Component} from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Main from './src/screens/Main'
import List from './src/screens/List'


export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key="main"
            component={Main}
            hideNavBar
          />

          <Scene key="list"
            component={List}
            hideNavBar
            initial
          />
        </Scene>

      </Router>
    );
  }
}



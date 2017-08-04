import React from 'react';
import {
  StackNavigator
} from 'react-navigation';
import HomeScreen from './home';
import DetailScreen from './detail';

const App = StackNavigator({
  home: {
    screen: HomeScreen
  },
  detail: {
    screen: DetailScreen
  }
});
export default App;

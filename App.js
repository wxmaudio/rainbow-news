import React from 'react';
import {Platform} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';
import HomeScreen from './src/components/home';
import DetailScreen from './src/components/detail';
import NewsTab from './src/components/tab';
import Drawer from './src/components/drawer';
import TabsInDrawer from './src/components/tabsInDrawer';

const App = StackNavigator(
  {
    /*home: {
      screen: HomeScreen
    },
    detail: {
      screen: DetailScreen
    },*/
    newsTab: {
      screen: NewsTab
    },
    drawer: {
      screen: Drawer
    },
    tabsInDrawer : {
      screen: TabsInDrawer
    }
  },
  {
   initialRouteName: 'tabsInDrawer',
   headerMode: 'none',

   /*
    * Use modal on iOS because the card mode comes from the right,
    * which conflicts with the drawer example gesture
    */
     mode: Platform.OS === 'ios' ? 'modal' : 'card',
   }
);

export default App;

import React from 'react';
import { Text, Button, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CommonStyles from '../CommonStyles';
import Home from './home';
import Detail from './detail';
import Menu from './TMenu';
import Sudoku from './Tsudoku';

/**
* 主tab页切换,Home页的导航在这里配置
*/
const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    path: '/'
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      title: 'Detail Page',
    },
  },
  Menu: {
    screen: Menu,
    navigationOptions: {
      title: 'Menu'
    }
  },
  Sudoku: {
    screen: Sudoku,
    navigationOptions: {
      title: 'Sudoku'
    }
  }
});
/*class Home extends React.Component{
  static navigationOptions = {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  render() {
    return (
      <View style={styles.container}>
        <Text> Home!</Text>
      </View>
    );
  }
}*/
class Chat extends React.Component{
  static navigationOptions = {
    tabBarLabel: 'Chat',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  }
  render() {
    return (
      <ScrollView style={CommonStyles.container}>
        <Text> My chat list.</Text>
      </ScrollView>
     );
  }
}

const NewsTab = TabNavigator(
   {
      HomeStack: {
        screen: HomeStack,
        path: '',
        navigationOptions: {
          tabBarLabel: 'Home',
          tabBarIcon: ({ tintColor, focused }) => (
            <Ionicons
              name={focused ? 'ios-home' : 'ios-home-outline'}
              size={26}
              style={{ color: tintColor }}
            />
          ),
      },

      },
      My: {
        screen: Chat,
        path: 'chat'
      },
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff'
    }
  }
);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});

export default NewsTab;

import React from 'react';
import { Text, Button, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './home';
import Detail from './detail';

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

const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    path: '/',
    navigationOptions: () => ({
      title: 'Home Page',
    }),
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      title: 'Detail Page',
    },
  },
});

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
      <ScrollView style={styles.container}>
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

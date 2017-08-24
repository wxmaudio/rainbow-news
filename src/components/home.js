import React from 'react';
import { Button, Text, View, StyleSheet, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NewsListContainer from '../container/NewsListContainer';
/**
*  首页新闻
*/
class HomeScreen extends React.Component{
  constructor(props){
    super(props);
  }

  static navigationOptions = ({navigation}) => ({
    title: '首页',
    headerRight: (
      <Ionicons
        name='ios-search'
        size={26}
        style={{ color: 'blue', padding: 10 }}
        onPress={() => navigation.navigate('DrawerOpen')}
      />
    ),
    headerLeft: (
      <Ionicons
        name='ios-person'
        size={26}
        style={{ color: 'blue', padding: 10 }}
      />
    )
  })



  render() {
    const navigation = this.props.navigation;
    return (
      <View style = {styles.container}>
        <View style = {styles.logo}>
          <Text>Rainbow 更懂你~ </Text>
        </View>

        <NewsListContainer navigation={navigation}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
   fontSize: 15,
  }
});

export default HomeScreen;

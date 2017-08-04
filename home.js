import React from 'react';
import { Button, Text, View } from 'react-native';

class HomeScreen extends React.Component{
  constructor(props){
    super(props);
    this.onPress = this.onPress.bind(this);
  }
  static navigationOptions = {
    title: 'Home',
  };
  onPress() {
    const {navigate} = this.props.navigation;
    navigate('detail', { title: 'baby care'})
  }
  render() {
    return (
      <View>
        <Text>Welcome!</Text>
        <Button
          title="Go to detail"
          onPress= {this.onPress}
        />
      </View>
    );
  }
}

export default HomeScreen;

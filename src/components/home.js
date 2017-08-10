import React from 'react';
import { Button, Text, View, StyleSheet, Platform} from 'react-native';

class HomeScreen extends React.Component{
  constructor(props){
    super(props);
    this.onPress = this.onPress.bind(this);
  }
  static navigationOptions = {
    title: 'Home',
  }
  onPress() {
    const {navigate} = this.props.navigation;
    navigate('Detail', { title: 'baby care'})
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text>Welcome to Home!</Text>
        <Button
          title="Go to detail"
          onPress= {this.onPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  }
});

export default HomeScreen;

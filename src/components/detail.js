import React from 'react';
import {View, Text, Button} from 'react-native';

class DetailScreen extends React.Component {
  static navigationOptions = {
    title : 'NewsDetail'
  }
  constructor(props){
    super(props);
  }
  render(){
    console.log('--------', JSON.stringify(this.props));
    const {params} = this.props.navigation.state;
    return (
      <View>
        <Text> News Title </Text>
        <Text> {params.title} </Text>
      </View>
    );
  }
}

export default DetailScreen;

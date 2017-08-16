import React from 'react';
import {View, Text, Button, Image} from 'react-native';

class DetailScreen extends React.Component {
  static navigationOptions = {
    title : '新闻详情页'
  }
  constructor(props){
    super(props);
  }
  render(){
    //console.log('--------', JSON.stringify(this.props));
    const {params} = this.props.navigation.state;
    return (
      <View>
        <Text> { params.title } </Text>
        <Image style={{width: 50, height: 50}} source={{uri: params.imgURL}}/>
        <Button title="分享" onPress = {()=>{}}/>
      </View>
    );
  }
}

export default DetailScreen;

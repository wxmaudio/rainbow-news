import React from 'react';
import { View, Image, Text, TouchableHighlight } from 'react-native';

class ListItem extends React.Component {
  onPress() {
    //console.log('+++++++', this.props);
    const { title, imgURL, navigation } = this.props;
    const { navigate } = navigation;
    navigate('Detail', { title, imgURL});
  }

  render() {
    //console.log('---------', this.props);
    const {imgURL, title, from, time} = this.props;
    return (
     <TouchableHighlight onPress={this.onPress.bind(this)}>
      <View>
        <Image style={{width: 50, height: 50}} source={{uri: imgURL}}/>
        <Text>{title}</Text>
        <Text>{from} {time}</Text>
      </View>
      </TouchableHighlight>
    );
  }
}

// const ListItem = (props) => {
//   const {url, title, from, time} = props;
//   return (
//     <View>
//       <Image style={{width: 50, height: 50}} source={{uri: url}}/>
//       <Text>{title}</Text>
//       <Text>{from} {time}</Text>
//     </View>
//   );
// }

class NewsList extends React.Component {
  render(){
    const { list, navigation } = this.props;
    //console.log('---------', this.props);
    return (
      <View>
      {
        list.map((item, index) => {
          return <ListItem key={index}  {...item}  navigation = {navigation}/>
        })
      }
      </View>
    );
  }
}

export default NewsList;

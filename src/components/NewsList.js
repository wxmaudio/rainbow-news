import React from 'react';
import { ScrollView, View, Image, Text, TouchableHighlight, StyleSheet} from 'react-native';
import Util from '../Util';

class ListItem extends React.Component {
  onPress() {
    //console.log('+++++++', this.props);
    const { title, imgURL, navigation } = this.props;
    const { navigate } = navigation;
    navigate('Detail', { title, imgURL});
    //navigate('Sudoku');
  }

  render() {
    //console.log('---------', this.props);
    const {imgURL, title, from, time} = this.props;
    return (
     <TouchableHighlight onPress={this.onPress.bind(this)} style = {[styles.card, styles.shadow]}>
      <View style = {styles.card_inner}>
        <Image resizeMode= 'cover' style={styles.card_img} source={{uri: imgURL}}/>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.info}>{from} {time}</Text>
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
      <ScrollView>
        <View>
          {
            list.map((item, index) => {
              return <ListItem key={index}  {...item}  navigation = {navigation}/>
            })
          }
        </View>
      </ScrollView>
    );
  }
}

const mgn = 7; //卡片外侧的margin
const pad = 7; //卡片内侧的padding， 这里抽取出来是便于计算图片的宽度
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#E7E7E7",
    shadowOffset: {width:1, height:1},
    shadowOpacity: 1
  },
  card: {
    	backgroundColor:'white',
      margin: mgn,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#F2F2F2',
  },
  card_inner: {
    padding: 7,
    flexDirection: 'column',
  },
  card_img: {
    width: Util.size.width - mgn*2 - pad*2,
    height: 70,
    alignSelf: 'center',
  },
  title: {
    margin: 2,
    fontSize: 16,
  },
  info: {
    color: '#A2A6A5',
    padding: 2,
    fontSize: 11,
  }
});

export default NewsList;

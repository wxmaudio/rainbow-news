import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import CommonStyles from '../CommonStyles';
import Util from '../Util';

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
      <View style={[styles.wrapper]}>
        <Text style={styles.title}>{ params.title } </Text>
        <Image style={styles.pic} source={{uri: params.imgURL}}/>
        <View style={styles.content}>
          <Text>   美国快餐连锁巨头麦当劳公司23日宣布,要求全球的肉鸡供应商2018年开始逐步停止使用人类抗生素,以防止出现更多的超级细菌。{'\n'} 中国不在第一批名单中。{'\n'}

麦当劳在声明中要求肉鸡供应商逐步停用世界卫生组织认定的人类药物中“最高优先级的重要抗菌药物”(HPCIA),第一批从2018年1月开始,包括巴西、加拿大、日本、韩国、美国和欧洲,不过欧洲供应商仍然可以使用粘菌素;至2019年底,澳大利亚和俄罗斯的供应商将停止使用这些抗生素,欧洲供应商停止使用粘菌素;其余市场供应商至2027年1月全面停止使用抗生素。

路透社援引声明内容报道,麦当劳还计划将这一政策推广至其他肉类、奶牛和蛋鸡。</Text>
        </View>
        <Button title="分享" onPress = {()=>{}}/>
      </View>
    );
  }
}

const mgn = 7;
const styles = StyleSheet.create({
  wrapper: {
    marginLeft: mgn,
    marginRight: mgn,
  },
  title: {
    fontSize: 17,
    marginTop: 5,
    marginBottom: 5,
  },
  pic: {
    width: Util.size.width - 2*mgn,
    height: 70,
    marginBottom: 5,
  },
  content: {
    fontSize: 15,
  }
});

export default DetailScreen;

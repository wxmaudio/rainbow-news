import { StyleSheet, Platform, Dimensions } from 'react-native';

const win = Dimensions.get('window');
const hpd = 5; // 左右padding
const vpd = 5; // 上下padding

const CommonStyles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    flex: 1,
    flexDirection: 'column'
  },
  image: {
    width: win.width,
    paddingLeft: 10,
    paddingRight:10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default CommonStyles;

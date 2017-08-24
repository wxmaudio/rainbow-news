import {React} from 'react';
import {Button, Platform} from 'react-native';
import {TabNavigator, DrawerNavigator} from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Tab from './tab';
import Settings from './settings';

/**
* 屏幕左侧呼出菜单， App 主入口
*/
const TabsInDrawer = new DrawerNavigator({
  MainTab: {
    screen: Tab,
    navigationOptions: {
      drawer: () => ({
        label: 'Main Tabs',
        icon: ({ tintColor }) => (
          <MaterialIcons
            name="filter-1"
            size={24}
            style={{ color: tintColor }}
          />)
      })
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      drawer: () => ({
        label: 'Settings',
        icon: ({ tintColor }) => (
          <MaterialIcons
            name="filter-2"
            size={24}
            style={{ color: tintColor }}
          />)
      })
    }
  }
});


export default TabsInDrawer;

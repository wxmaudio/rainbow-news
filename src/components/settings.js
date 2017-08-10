import React from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';

const Settings = ({navigation, name}) => {
  return (<View style = {styles.container}>
      <Text>Settings</Text>
    </View>);
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  }
});

export default Settings;

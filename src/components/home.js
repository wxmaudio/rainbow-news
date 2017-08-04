import React from 'react';

class HomeScreen extends React.Component{
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to detail"
        onPress={() =>
          navigete('detail', { title: 'NewsDetail'});
        }
      />
    );
  }
}

export default HomeScreen;

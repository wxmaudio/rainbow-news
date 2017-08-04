import React from 'react';

class DetailScreen from React.Component{
  render(){
    const title = this.props.title;
    return (<h2> ${title} </h2>);
  }
}

export default DetailScreen;

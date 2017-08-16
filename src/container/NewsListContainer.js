import React from 'react';
import NewsList from '../components/NewsList';

class NewsListContainer extends React.Component {
  state = {
    list: []
  }
  componentDidMount(){
    this.setState({
      list: [
        { imgURL:'http://img.jiemian.com/101/original/20170815/150276674276377800_a640x360.jpg',
          title: '博尔特有望出战元老赛',
          from: '瞭望',
          time: '两小时前'
        },
        { imgURL:'http://img.jiemian.com/101/original/20170815/150278345046491000_a640x360.jpg',
          title: '澳洲咖啡厅向男士收18%附加费',
          from: '腾讯',
          time: '两小时前'
        }
      ]
    });
  }
  render() {
    const list = this.state.list || [];
    const props = this.props;
    console.log('------list:', list);
    return (
      <NewsList list = {list} {...props}/>
    )
  }
}

export default NewsListContainer;

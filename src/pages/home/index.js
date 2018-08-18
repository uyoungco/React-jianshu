import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from './store/index'

import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'

class Home extends Component {
  componentDidMount() {
    this.props.changeHomeData()
  }
  handleScrollTop() {
    window.scroll(0, 0)
  }
  render() {
    return(
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4369/0cc77fa3ef12b099ba0237da2616c87cba0f58ae.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        <BackTop onClick={() => this.handleScrollTop()}>回到顶部</BackTop>
      </HomeWrapper>
    )
  }
}

const mapDispatch = dispatch => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  }
})

export default connect(null, mapDispatch)(Home)
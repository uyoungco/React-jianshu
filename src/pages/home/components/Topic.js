import React, { Component } from 'react';
import { connect } from 'react-redux'

import {
  TopicWrapper,
  TopItem
} from '../style'

class Topic extends Component {
  render() {
    const { list } = this.props
    return(
      <TopicWrapper>
        {
          list.map((item) => (
            <TopItem key={item.get('id')}>
              <img  className="topic-pic" src={item.get('imgUrl')} alt={item.get('title')} />
              {item.get('title')}
            </TopItem>
          ))
        }
      </TopicWrapper>
    )
  }
}

const mapState = state => ({
  list: state.getIn(['home', 'topicList'])
})

export default connect(mapState, null)(Topic)
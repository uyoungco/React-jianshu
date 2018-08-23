import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from './store'

import {
  DetailWrapper,
  Header,
  Content
} from './style'

class Detail extends Component {
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }
  render() {
    console.log(this.props)
    return(
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}} />
      </DetailWrapper>
    )
  }
}

const mapState = state => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})
const mapDispatch = dispatch => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id))
  }
})

export default connect(mapState, mapDispatch)(Detail)
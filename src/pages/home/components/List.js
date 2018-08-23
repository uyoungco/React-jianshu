import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { actionCreators } from '../store'

import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style'

class List extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
  }
  render() {
    const { list, getMoreList, page } = this.props
    return(
      <div>
        <TransitionGroup
        >
        {
          list.map(item => (
            <CSSTransition
              timeout={1000}
              classNames="list"
              unmountOnExit //隐藏时移除DOM
              appear = {true}
              key={item.get('id')}
            >
              <Link to="/detail" >
                <ListItem>
                  <img className="pic" src={item.get('imgUrl')} alt={item.get('title')} />
                  <ListInfo>
                    <h3 className="title">{item.get('title')}</h3>
                    <p className="desc">{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            </CSSTransition>
          ))
        }
        </TransitionGroup>
        <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
      </div>
    )
  }
}

const mapState = state => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'artclePage'])
})

const mapDispatch = dispatch => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
})

export default connect(mapState, mapDispatch)(List)
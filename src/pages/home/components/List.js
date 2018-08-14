import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  ListItem,
  ListInfo
} from '../style'

class List extends Component {
  render() {
    const { list } = this.props
    console.log(list)
    return(
      <div>
        {
          list.map(item => (
            <ListItem key={item.get('id')}>
              <img className="pic" src={item.get('imgUrl')} alt={item.get('title')} />
              <ListInfo>
                <h3 className="title">{item.get('title')}</h3>
                <p className="desc">{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          ))
        }
        
        <ListItem>
          <img className="pic" src="//upload-images.jianshu.io/upload_images/10070236-8eb791666371818f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt=""/>
          <ListInfo>
            <h3 className="title">有趣的灵魂，了解一下？</h3>
            <p className="desc">来简书很久了，一直默默写作，记录自己的生活，好像从来没有正式介绍过自己！哈哈哈哈（我挺爱笑的，嘻嘻） 正逢假期，一个人心方方的找工作，可能只有码...</p>
          </ListInfo>
        </ListItem>
      </div>
    )
  }
}

const mapState = state => ({
  list: state.getIn(['home', 'articleList'])
})

export default connect(mapState, null)(List)
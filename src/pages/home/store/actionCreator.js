import axios from 'axios'
import { fromJS } from 'immutable'
import * as constants from './constants'

const changeHomeData = result => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList, 
  articleList: result.articleList,
  recommendList: result.recommendList
})
const addHomeList = (list, nextpage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextpage
})

export const getHomeInfo = () => {
  return dispatch => {
    axios.get('/api/home.json')
    .then(res => {
      const result = res.data.data
      dispatch(changeHomeData(result))
    })
  }
}

export const getMoreList = (page) => {
  return dispatch => {
    axios.get('/api/homeList.json?page=' + page)
    .then(res => {
      const result = res.data.data
      dispatch(addHomeList(result, page + 1))
    })
  }
}

export const toggleTopShow = (show) => ({
  type: constants.TOOGLE_SCROLL_TOP,
  show
})
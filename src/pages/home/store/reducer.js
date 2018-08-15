// import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: '//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  },{
    id: 2,
    title: '手绘',
    imgUrl: '//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }],
  articleList: [{
    id: 1,
    title: '有趣的灵魂，了解一下？',
    desc: '来简书很久了，一直默默写作，记录自己的生活，好像从来没有正式介绍过自己！哈哈哈哈（我挺爱笑的，嘻嘻） 正逢假期，一个人心方方的找工作，可能只有码...',
    imgUrl: '//upload-images.jianshu.io/upload_images/10070236-8eb791666371818f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  },{
    id: 2,
    title: '【乡土】彩云归处（92）    望天树',
    desc: '望天树只分布在西双版纳的补蚌和广纳里寨至景飘一带方圆20平方公里的范围内。聂远征他们所住的这个村寨距离那里有将近10公里的山路。 清晨起来，在一...',
    imgUrl: '//upload-images.jianshu.io/upload_images/9616950-5167df0cbb61700d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  }],
  recommendList: [{
    id: 1,
    imgUrl: '/api/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
  },{
    id: 2,
    imgUrl: '/api/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
  }]
});

export default (state = defaultState, action) => {
  switch(action.type) {

    default:
      return state
  }
}
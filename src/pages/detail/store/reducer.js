import { fromJS } from 'immutable'
import * as constants from './constants'


const defaultState = fromJS({
  title: '写作路上，一直我手写我心',
  content: '<img src="http://upload-images.jianshu.io/upload_images/9375032-c7172648142a06c4.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700" alt=""/><p><b>直到遇见简书，参加社群，我才更加专注把写字变成写作。</b>渐而对自己有所要求，希望水平得到提高。看到别人的文章文笔流畅、文采飞扬我也暗自伤神。我明白自己的不足，我知道山下和山顶看风景会有截然不同的感触，因此，你的高度决定你的宽度。</p><p><b>直到遇见简书，参加社群，我才更加专注把写字变成写作。</b>渐而对自己有所要求，希望水平得到提高。看到别人的文章文笔流畅、文采飞扬我也暗自伤神。我明白自己的不足，我知道山下和山顶看风景会有截然不同的感触，因此，你的高度决定你的宽度。</p><p><b>直到遇见简书，参加社群，我才更加专注把写字变成写作。</b>渐而对自己有所要求，希望水平得到提高。看到别人的文章文笔流畅、文采飞扬我也暗自伤神。我明白自己的不足，我知道山下和山顶看风景会有截然不同的感触，因此，你的高度决定你的宽度。</p>'
});

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state
  }
}
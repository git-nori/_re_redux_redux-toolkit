import { combineReducers } from 'redux'
import postsModule from './postsModule'

const rootReducer = combineReducers({
  // postsModuleのreducerをセット
  posts: postsModule.reducer
})

export default rootReducer
import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  posts: [],
  loading: false,
  hasErrors: false
}

const postsModule = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: state => {
      state.loading = true
    },
    getPostsSuccess: (state, { payload }) => {
      state.loading = false
      state.posts = payload
      state.hasErrors = false
    },
    getPostsFailure: state => {
      state.loading = false
      state.hasErrors = true
    }
  }
})

// actionの生成
export const { getPosts, getPostsSuccess, getPostsFailure } = postsModule.actions

// component内で'const {posts, loading, hasErrors} = useSelector(postsSelector)とかける'
export const postsSelector = state => state.posts

export default postsModule

// thunk function
export function fetchPosts () {
  return async dispatch => {
    dispatch(getPosts())

    try {
      const API_URL = 'https://jsonplaceholder.typicode.com/posts'
      const response = await fetch(API_URL)
      const data = await response.json()

      dispatch(getPostsSuccess(data))
    } catch (error) {
      dispatch(getPostsFailure())
    }
  }
}
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const initialState = {
  posts: [],
  loading: false,
  hasErrors: false
}

// Thunk action
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const API_URL = 'https://jsonplaceholder.typicode.com/posts'
    const response = await fetch(API_URL)
    const data = await response.json()
    return data
  }
)

const postsModule = createSlice({
  name: 'posts',
  initialState,
  reducers: {
  },
  extraReducers: {
    // createAsyncThunkで定義した非同期処理のステータスに応じて切り分ける処理を記述
    [fetchPosts.pending]: state => { state.loading = true },
    [fetchPosts.fulfilled]: (state, { payload }) => {
      state.posts = payload
      state.loading = false
      state.hasErrors = false
    },
    [fetchPosts.rejected]: state => {
      state.loading = false
      state.hasErrors = false
    }
  }
})

// actionの生成
export const { getPosts, getPostsSuccess, getPostsFailure } = postsModule.actions

// component内で'const {posts, loading, hasErrors} = useSelector(postsSelector)とかける'
export const postsSelector = state => state.posts

export default postsModule
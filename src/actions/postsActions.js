export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

// ActionCreator
export const getPosts = () => ({
  type: GET_POSTS
})

export const getPostsSuccess = posts => ({
  type: GET_POSTS_SUCCESS,
  payload: posts
})

export const getPostsFailure = () => ({
  type: GET_POSTS_FAILURE
})

// thunk function
export function fetchPosts () {
  return async dispatch => {
    // Pending
    dispatch(getPosts())

    try {
      const API_URL = 'https://jsonplaceholder.typicode.com/posts'
      const response = await fetch(API_URL)
      const data = await response.json()

      // Fullfilled
      dispatch(getPostsSuccess(data))
    } catch (errpr) {
      // Rejected
      dispatch(getPostsFailure())
    }
  }
}
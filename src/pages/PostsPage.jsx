import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions/postsActions'

import { Post } from '../components/Post'
import './PostsPage.css'

// propsでstoreからstateを受け取る
const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {

  // Componentのライフサイクル時に発火
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const renderPosts = () => {
    if (loading) return <p>loading...</p>
    if (hasErrors) return <p>Unable to display posts...</p>
    return posts.map(post => <Post key={post.id} post={post} />)
  }

  return (
    <div>
      <h1>Posts</h1>
      {renderPosts()}
    </div>
  )
}

// propsで受け取るstoreの値の設定
const mapStateToProps = state => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors
})

// storeとcomponent(PostsPage)をconnect
export default connect(mapStateToProps)(PostsPage)
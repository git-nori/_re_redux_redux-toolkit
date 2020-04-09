import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, postsSelector } from '../modules/postsModule'
import { Post } from '../components/Post'
import './PostsPage.css'

const PostsPage = () => {
  const dispatch = useDispatch()
  // storeからstateの値を格納
  const { posts, loading, hasErrors } = useSelector(postsSelector)

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

export default PostsPage
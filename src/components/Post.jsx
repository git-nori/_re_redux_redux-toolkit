import React from 'react'

// propsでpostを受け取る
export const Post = ({ post }) => {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body.substring(0, 100)}</p>
      <hr/>
    </article>
  )
}
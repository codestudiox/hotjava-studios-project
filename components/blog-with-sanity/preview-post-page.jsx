import { usePreview } from '@/utils/blog-with-sanity/sanity.preview'
import { postAndMoreStoriesQuery } from '@/utils/blog-with-sanity/sanity.queries'
import React from 'react'
import PostPage from './post-page'

export default function PreviewPostPage({ token, post, settings }) {
  const { post: postPreview, morePosts } = usePreview(
    token,
    postAndMoreStoriesQuery,
    {
      slug: post.slug,
    }
  ) || { post: null, morePosts: [] }
  return (
    <PostPage
      Preview
      post={postPreview}
      morePosts={morePosts}
      settings={settings}
    />
  )
}

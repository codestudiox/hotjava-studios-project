import { usePreview } from '@/utils/blog-with-sanity/sanity.preview'
import React from 'react'
import { DemoPost } from './demo-post'

export default function PreviewDemoPost({ query }) {
  const posts = usePreview(null, query)
  // console.log(posts)
  return <DemoPost posts={posts} />
}

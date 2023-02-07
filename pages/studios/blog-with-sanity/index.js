
import IndexPage from '@/components/blog-with-sanity/index-page'
import { getAllPosts, getSettings } from '@/utils/blog-with-sanity/sanity.client'
import React from 'react'

export const getStaticProps = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const [settings, posts] = await Promise.all([getSettings(), getAllPosts()])

  // const settings = await getSetting()


  if (preview) {
    return { props: { preview } }
  }

  return {
    props: {
      posts,
      settings,
      preview,
      token: previewData?.token ?? null,
    },
  }
}

export default function Page(props) {
  const { posts, settings, preview, token } = props
  // const { posts, preview, token } = props
  console.log(posts)

  if (preview) {
    return (
      <div>
        <h1>Preview Mode</h1>
      </div>
    )
  }

  return (
    <div>
      <IndexPage posts={posts} settings={settings} />
      {/* <IndexPage posts={posts}  /> */}
    </div>
  )
}

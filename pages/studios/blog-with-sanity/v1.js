import { DemoPost } from '@/components/blog-with-sanity/demo-post'
import PreviewDemoPost from '@/components/blog-with-sanity/preview-demo-post'
import { client } from '@/utils/blog-with-sanity/sanity.client'
import { groq } from 'next-sanity'
import { PreviewSuspense } from 'next-sanity/preview'

// step1: test query with getStaticProps
const query = groq`
*[_type == "post"]{
  ...,
  author->,
  category[]->,
  } | order(_createdAt desc)
`

// step2: test query with getStaticProps
export const getStaticProps = async ({ preview = false }) => {
  if (preview) {
    return { props: { preview } }
  }

  const posts = await client.fetch(query)

  return {
    props: {
      preview,
      posts,
    },
  }
}

export default function BlogWithMarkdownPage({ preview, posts }) {
  console.log(preview)
  console.log(posts)

  if (preview) {
    return (
      <PreviewSuspense fallback={<div>Loading...</div>}>
        <PreviewDemoPost query={query} />
      </PreviewSuspense>
    )
  }

  return <DemoPost posts={posts} />
}

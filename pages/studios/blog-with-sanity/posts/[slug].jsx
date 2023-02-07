import { PreviewSuspense } from 'next-sanity/preview'
import PostPage from '@/components/blog-with-sanity/post-page'
// import PreviewPostPage from '@/components/blog-with-sanity/preview-post-page'
import {
  getAllPostsSlugs,
  getPostAndMoreStories,
  getSettings,
} from '@/utils/blog-with-sanity/sanity.client'
import { lazy } from 'react'

const PreviewPostPage = lazy(() =>
  import('components/blog-with-sanity/preview-post-page')
)

export const getStaticProps = async (ctx) => {
  const { params = {}, preview = false, previewData = {} } = ctx

  const token = previewData?.token

  const [settings, { post, morePosts }] = await Promise.all([
    getSettings(),
    getPostAndMoreStories(params.slug, token),
  ])

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
      morePosts,
      settings,
      preview,
      token: previewData.token ?? null,
    },
  }
}

export const getStaticPaths = async () => {
  const slugs = await getAllPostsSlugs()

  return {
    paths:
      slugs?.map(({ slug }) => `/studios/blog-with-sanity/posts/${slug}`) || [],
    fallback: true,
  }
}

export default function ProjectSlugRoute(props) {
  const { settings, post, morePosts, preview, token } = props
  console.log('props', props)

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PostPage
            loading
            preview
            post={post}
            morePosts={morePosts}
            settings={settings}
          />
        }
      >
        <PreviewPostPage
          token={token}
          post={post}
          morePosts={morePosts}
          settings={settings}
        />
      </PreviewSuspense>
    )
  }

  //   console.log('post', post)

  return (
    <>
      <h1> Static View</h1>
      <PostPage post={post} morePosts={morePosts} settings={settings} />
    </>
  )
}

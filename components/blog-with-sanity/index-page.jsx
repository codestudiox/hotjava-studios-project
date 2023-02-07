import Head from 'next/head'
import * as demo from 'utils/blog-with-sanity/demo.data'
import BlogContainer from './blog-container'
import BlogLayout from './blog-layout'
import IndexPageHead from './index-page-head'
import MoreStories from './more-stories'

export default function IndexPage(props) {
  const { preview, loading, posts, settings } = props
  const [heroPost, ...morePosts] = posts || []
  const { title = demo.title, description = demo.description } = settings || {}

  // console.log('IndexPage', { preview, loading, posts, settings })
  return (
    <>
      <Head>
        <IndexPageHead settings={settings} />
      </Head>
      <BlogLayout preview={preview} loading={loading}>
        <BlogContainer>
          <div>
            {/* Hero Post */}
            {heroPost && (
              <div>
                <h1>{heroPost.title}</h1>
                <p>{heroPost.description}</p>
              </div>
            )}

            {/* More Stories ... */}
            {morePosts.length > 0 && (
              <MoreStories posts={morePosts} />
            )}

          </div>
        </BlogContainer>
      </BlogLayout>
    </>
  )
}

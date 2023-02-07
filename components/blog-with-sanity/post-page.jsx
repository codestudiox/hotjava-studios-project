import Head from 'next/head'

import BlogHeader from './blog-header'
import BlogContainer from './blog-container'
import BlogLayout from './blog-layout'
import PostBody from './post-body'
import PostPageHead from './post-page-head'
import PostTitle from './post-title'
import * as demo from 'utils/blog-with-sanity/demo.data'
import PostHeader from './post-header'
import SectionSeparator from './section-separator'
import MoreStories from './more-stories'


const NO_POSTS = []

export default function PostPage(props) {
  const { preview, loading, morePosts = NO_POSTS, post, settings } = props
  const { title = demo.title } = settings || {}
  return (
    <>
      <Head>
        <PostPageHead settings={settings} post={post} />
      </Head>
      <BlogLayout preview={preview} loading={loading}>
        <BlogContainer>
          <BlogHeader title={title} level={2} />
          {preview && !post ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                />
                <PostBody content={post.content} />
              </article>
              <SectionSeparator />
              {morePosts.length > 0 && (
                <MoreStories posts={morePosts} />
              )}
            </>
          )}
        </BlogContainer>
      </BlogLayout>
    </>
  )
}

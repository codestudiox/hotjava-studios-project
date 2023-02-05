import BlogLayout from '@/components/blog-with-markdown/blog-layout'
import Container from '@/components/blog-with-markdown/container'
import HeroPost from '@/components/blog-with-markdown/hero-post'
import Intro from '@/components/blog-with-markdown/intro'
import MoreStories from '@/components/blog-with-markdown/more-stories'
import { CMS_NAME } from '@/utils/blog-with-markdown/constants'
import Head from 'next/head'
import { getAllPosts } from '../../../utils/blog-with-markdown/posts'

/**
 * 1. Import the `getAllPostIds` function from `lib/blog-with-markdown/posts.js`
 *
 * @returns Blog Page
 */
export default function BlogPage({ allPosts }) {
  // console.log(allPosts)
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return (
    <>
      {/* {JSON.stringify(allPosts, null, 2)} */}
      {/* {allPosts.map((post) => (
        <div key={post.slug}>
          <h1>{post.title}</h1>
        </div>
      ))} */}
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            excerpt={heroPost.excerpt}
            author={heroPost.author}
            slug={heroPost.slug}
          />
        )}

        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </>
  )
}

BlogPage.getLayout = function getLayout(preview, page) {
  return (
    <BlogLayout>
      {preview} {page}
    </BlogLayout>
  )
}

export async function getStaticProps() {
  // 2. Call `getAllPosts` to get all the posts
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  // 3. Pass the posts ids to the `BlogPage` component as props
  return {
    props: {
      allPosts,
    },
  }
}

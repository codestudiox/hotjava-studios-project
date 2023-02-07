import Container from '@/components/blog-with-markdown/container'
import { CMS_NAME } from '@/utils/blog-with-markdown/constants'
import markdownToHtml from '@/utils/blog-with-markdown/markdownToHtml'
import { getAllPosts, getPostBySlug } from '@/utils/blog-with-markdown/posts'
import Head from 'next/head'
import BlogLayout from '@/components/blog-with-markdown/blog-layout'
import Header from '@/components/blog-with-markdown/header'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostTitle from '@/components/blog-with-markdown/post-title'
import PostHeader from '@/components/blog-with-markdown/post-header'
import PostBody from '@/components/blog-with-markdown/post-body'

export default function Post({ post, morePosts, preview }) {
  console.log(post)
  console.log(morePosts)
  console.log(preview)

  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Container>
      <Header />
      {router.isFallback ? (
        <PostTitle>Loading...</PostTitle>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>
                {post.title} | Next.js Blog Example with {CMS_NAME}
              </title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content} />
          </article>
        </>
      )}
    </Container>
  )
}

Post.getLayout = function getLayout(preview, page) {
  // return <BlogLayout preview={preview}>{page}</BlogLayout>
  return (
    <BlogLayout>
      {preview}
      {page}
    </BlogLayout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

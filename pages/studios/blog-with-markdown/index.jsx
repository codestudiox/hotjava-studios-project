import { getAllPosts } from '../../../utils/blog-with-markdown/posts'

/**
 * 1. Import the `getAllPostIds` function from `lib/blog-with-markdown/posts.js`
 *
 * @returns Blog Page
 */
export const BlogPage = ({ allPosts }) => {
  // console.log(allPosts)
  return (
    <div>
      {/* {JSON.stringify(allPosts, null, 2)} */}
      {allPosts.map((post) => (
        <div key={post.slug}>
          <h1>{post.title}</h1>
        </div>
      ))}
    </div>
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

export default BlogPage

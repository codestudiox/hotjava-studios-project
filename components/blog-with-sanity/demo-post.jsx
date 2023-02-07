import groq from 'groq'
import { createGlobalStyle } from 'styled-components'

// export const query = groq`count(*[])`

export function DemoPost({ posts }) {
  // console.log(posts)
  return (
    <>
      {posts.map((post) => (
        <div key={post.title}>
          <h1>{post.title}</h1>
        </div>
      ))}
    </>
  )
}

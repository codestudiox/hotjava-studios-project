import BlogMeta from 'components/blog-with-sanity/blog-meta'
import * as demo from 'utils/blog-with-sanity/demo.data'
import { urlForImage } from 'utils/blog-with-sanity/sanity.image'
import { Post, Settings } from 'utils/blog-with-sanity/sanity.queries'

// export interface PostPageHeadProps {
//   settings: Settings
//   post: Post
// }

export default function PostPageHead({ settings, post }) {
  const title = settings.title ?? demo.title
  return (
    <>
      <title>{post.title ? `${post.title} | ${title}` : title}</title>
      <BlogMeta />
      {post.coverImage?.asset?._ref && (
        <meta
          property="og:image"
          content={urlForImage(post.coverImage)
            .width(1200)
            .height(627)
            .fit('crop')
            .url()}
        />
      )}
    </>
  )
}

import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
 

const CoverImage = ({ title, src, slug }) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm w-full', {
        'hover:shadow-lg transition-shadow duration-200': slug,
      })}
      width={1300}
      height={630}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/studios/blog-with-markdown/posts/${slug}`}
         href="/studios/blog-with-markdown/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
import cn from 'classnames'
import { urlForImage } from 'utils/blog-with-sanity/sanity.image'
import Image from 'next/image'
import Link from 'next/link'

export default function CoverImage(props) {
  console.log(props)
  const { title, slug, image: source, priority } = props
  const image = source?.asset?._ref ? (
    <div
      className={cn('shadow-small', {
        'transition-shadow duration-200 hover:shadow-medium': slug,
      })}
    >
      <Image
        className="h-auto w-full"
        width={2000}
        height={1000}
        alt={`Cover Image for ${title}`}
        src={urlForImage(source).height(1000).width(2000).url()}
        sizes="100vw"
        priority={priority}
      />
    </div>
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  )

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link
          href={`/studios/blog-with-sanity/posts/${slug}`}
          aria-label={title}
        >
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

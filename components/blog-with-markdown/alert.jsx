import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '@/utils/blog-with-markdown/constants'
import Link from 'next/link'

 
const Alert = ({ preview }) => {
  return (
    <div
      className={cn('border-b', {
        'bg-neutral-800 border-neutral-800 text-white': preview,
        'bg-neutral-50 border-neutral-200': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{' '}
              <Link
                href="/api/exit-preview"
                className="underline hover:text-teal-300 duration-200 transition-colors"
              >
                Click here
              </Link>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{' '}
              <Link
                href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                className="underline hover:text-blue-600 duration-200 transition-colors"
              >
                available on GitHub
              </Link>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Alert
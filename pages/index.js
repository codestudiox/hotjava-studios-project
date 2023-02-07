import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
        <h1 className='text-5xl font-bold'>
          Welcome to{' '}
          <a className='text-blue-600' href='https://nextjs.org'>
            Hotjava.com!
          </a>
        </h1>

        <h2 className='mt-10 text-3xl font-bold text-amber-500 underline'>
          Clone Next.js Examples          
        </h2>

        <div className='mt-2 flex max-w-4xl flex-wrap items-center justify-around sm:w-full'>
          <Link
            href='/studios/blog-with-markdown'
            className='mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'
          >
            <h3 className='text-2xl font-bold'>Blog w. Markdown &rarr;</h3>
            <p className='mt-4 text-xl'>
              Clone Next.js Blog with markdown files
            </p>
          </Link>  
          <Link
            href='/studios/blog-with-sanity'
            className='mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'
          >
            <h3 className='text-2xl font-bold'>Blog w. Database &rarr;</h3>
            <p className='mt-4 text-xl'>
              Clone Next.js Blog with database
            </p>
          </Link>    
          <Link
            href='/studios/blog-with-sanity'
            className='mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'
          >
            <h3 className='text-2xl font-bold'>Blog w. Sanity &rarr;</h3>
            <p className='mt-4 text-xl'>
              Clone Next.js Blog with sanity
            </p>
          </Link>        
        </div>
        <h2 className='mt-10 text-3xl font-bold text-purple-500 underline'>
          Next.js Official Docs
        </h2>
        <hr />
        <div className='mt-2 flex max-w-4xl flex-wrap items-center justify-around sm:w-full'>
          <a
            href='https://nextjs.org/docs'
            className='mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'
          >
            <h3 className='text-2xl font-bold'>Documentation &rarr;</h3>
            <p className='mt-4 text-xl'>
              Find in-depth information about Next.js features and its API.
            </p>
          </a>

          <a
            href='https://nextjs.org/learn'
            className='mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'
          >
            <h3 className='text-2xl font-bold'>Learn &rarr;</h3>
            <p className='mt-4 text-xl'>
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/canary/examples'
            className='mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'
          >
            <h3 className='text-2xl font-bold'>Examples &rarr;</h3>
            <p className='mt-4 text-xl'>
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className='mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'
          >
            <h3 className='text-2xl font-bold'>Deploy &rarr;</h3>
            <p className='mt-4 text-xl'>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className='flex h-24 w-full items-center justify-center border-t'>
        <a
          className='flex items-center justify-center gap-2'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default HomePage

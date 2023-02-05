import Alert from './alert'
import Footer from './footer'
import Header from './header'
import Meta from './meta'

export default function BlogLayout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className='min-h-screen'>
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

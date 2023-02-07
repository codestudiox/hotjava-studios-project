import AlertBanner from './alert-banner'

export default function BlogLayout({ preview, loading, children }) {
  return (
    <>
      <div className="min-h-screen">
        <AlertBanner preview={preview} loading={loading} />
        <main>{children}</main>
      </div>
    </>
  )
}

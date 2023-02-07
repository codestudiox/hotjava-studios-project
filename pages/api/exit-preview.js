export default function exit(req, res) {
    res.clearPreviewData()
    res.writeHead(307, {Location: '/studios/blog-with-sanity'})
    res.end()
  }
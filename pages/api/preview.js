export default function preview(req, res) {
    res.setPreviewData({})
    res.writeHead(307, {Location: '/studios/blog-with-sanity'})
    res.end()
  }
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { CLIENT_RENEG_LIMIT } from 'tls'

const postsDirectory = join(process.cwd(), '_data/md-blog-posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)

  //   raw markdown content
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  //   parse markdown using gray-matter
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields) {
  // get all slugs
  const slugs = getPostSlugs()
  //   console.log('slugs', slugs)

  // get all posts sorted by date
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

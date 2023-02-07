// export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
// export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
// export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

// v1
// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: false,
// })

// v2
import { apiVersion, dataset, projectId, useCdn } from './sanity.api'
import {
  settingsQuery,
  indexQuery,
  postSlugsQuery,
  postAndMoreStoriesQuery,
} from './sanity.queries'

import { createClient } from 'next-sanity'

export const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null

// export interface Settings {
//   title?: string
//   description?: any[]
//   ogImage?: {
//     title?: string
//   }
// }

export async function getSettings() {
  if (client) {
    return (await client.fetch(settingsQuery)) || {}
  }
  return {}
}

export async function getAllPosts() {
  if (client) {
    return (await client.fetch(indexQuery)) || []
  }
  return []
}

export async function getAllPostsSlugs() {
  if (client) {
    const slugs = (await client.fetch(postSlugsQuery)) || []
    return slugs.map((slug) => ({ slug }))
  }
}

export async function getPostAndMoreStories(slug, token) {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    })
    return await client.fetch(postAndMoreStoriesQuery, { slug })
  }

  return { post: null, morePosts: null }
}

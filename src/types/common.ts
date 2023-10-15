export type TPhoto = {
  alt_description: string
  blur_hash: string
  breadcrumbs: string[]
  color: string
  created_at: string
  current_user_collections: string[] // You can specify the actual type for current_user_collections
  description: string
  height: number
  id: string
  liked_by_user: boolean
  likes: number
  links: {
    download: string
    download_location: string
    html: string
    self: string
  }
  promoted_at: string
  slug: string
  updated_at: string
  urls: {
    full: string
    raw: string
    regular: string
    small: string
    small_s3: string
    thumb: string
  }
  topic_submissions: Record<string, {status: string; approved_on?: string}>
}

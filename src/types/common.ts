export type TPhoto = {
  id: string
  likes: number
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

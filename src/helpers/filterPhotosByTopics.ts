import {TPhoto} from '@/types/index'

export function filterPhotosByTopics(photos: TPhoto[], topic: string): TPhoto[] {
  return photos.filter((photo) => Object.keys(photo.topic_submissions).some((key) => key === topic))
}

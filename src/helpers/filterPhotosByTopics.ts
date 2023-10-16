import {TPhoto} from '@/types/index'

const filterPhotosByTopics = (photos: TPhoto[], topic: string): TPhoto[] => {
  return photos.filter((photo) => Object.keys(photo.topic_submissions).some((key) => key === topic))
}

export default filterPhotosByTopics

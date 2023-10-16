import {TPhoto} from '@/types/index'

const sortPhotosByLikes = (photos: TPhoto[], isSortingDescending: boolean): TPhoto[] => {
  return [...photos].sort((a, b) => {
    if (isSortingDescending) {
      return a.likes - b.likes
    } else {
      return b.likes - a.likes
    }
  })
}

export default sortPhotosByLikes

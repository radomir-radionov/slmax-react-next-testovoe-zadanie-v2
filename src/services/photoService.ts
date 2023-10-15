import {getPhotos} from '@/requests/index'
import errorText from '@/constants/errorText'
import {TPhoto} from '@/types/index'

export async function fetchPhotos(setPhotos: React.Dispatch<React.SetStateAction<TPhoto[]>>, setFilteredPhotos: React.Dispatch<React.SetStateAction<TPhoto[]>>) {
  try {
    const {data} = await getPhotos()
    setPhotos(data)
    setFilteredPhotos(data)
  } catch (error) {
    console.error(errorText.FETCHING_PHOTOS_ERROR, error)
  }
}

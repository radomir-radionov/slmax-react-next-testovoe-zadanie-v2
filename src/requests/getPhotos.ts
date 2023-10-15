import apiData from '@/constants/apiData'
import axios from 'axios'

export const getPhotos = async () => {
  const result = await axios.get(`https://api.unsplash.com/photos?&per_page=30&client_id=${apiData.ACCESS_KEY}`)

  return result
}

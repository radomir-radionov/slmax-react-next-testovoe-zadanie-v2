import {TPhoto} from '@/types/index'

const addPhotoToWatchlist = (data: TPhoto) => {
  const userWatchList = JSON.parse(localStorage.getItem('watchlist') || '[]') as TPhoto[]

  const isDataInWatchlist = userWatchList.some((item) => item.id === data.id)

  if (isDataInWatchlist) {
    alert('Already added to watchlist.')
    return
  }

  userWatchList.push(data)
  localStorage.setItem('watchlist', JSON.stringify(userWatchList))
  alert('Added to watchlist.')
}

export default addPhotoToWatchlist

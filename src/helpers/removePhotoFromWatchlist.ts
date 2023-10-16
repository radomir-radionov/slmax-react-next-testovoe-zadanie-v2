import {TPhoto} from '@/types/common.ts'

const removePhotoFromWatchlist = (data: TPhoto) => {
  const userWatchList = JSON.parse(localStorage.getItem('watchlist') || '[]') as TPhoto[]

  const indexToRemove = userWatchList.findIndex((item) => item.id === data.id)

  if (indexToRemove !== -1) {
    userWatchList.splice(indexToRemove, 1)
  } else {
    alert('Item not found in watchlist')
  }

  localStorage.setItem('watchlist', JSON.stringify(userWatchList))
  alert('Item removed from watchlist')
}

export default removePhotoFromWatchlist

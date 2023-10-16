import Image from 'next/image'
import {TPhoto} from '@/types/common'
import {addPhotoToWatchlist, removePhotoFromWatchlist} from '@/helpers/index.ts'

type TProps = {
  data: TPhoto
  view: string
}

const Photo = ({data, view}: TProps) => {
  const {
    urls: {small},
    likes,
  } = data

  const handleBtnAdd = () => addPhotoToWatchlist(data)
  const handleBtnRemove = () => removePhotoFromWatchlist(data)

  return (
    <article className='w-64 '>
      <Image src={small} className='w-64 h-60 rounded-2xl' width={400} height={200} alt='' />
      <p>Likes: {likes}</p>

      {view === 'watchlist' ? (
        <button onClick={handleBtnRemove} className='p-1 border-2 border-red-600 hover:bg-slate-100'>
          Remove
        </button>
      ) : (
        <button onClick={handleBtnAdd} className='p-1 border-2 border-purple-600 hover:bg-slate-100'>
          Add to Watchlist
        </button>
      )}
    </article>
  )
}

export default Photo

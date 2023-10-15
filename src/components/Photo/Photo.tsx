import Image from 'next/image'

type TProps = {
  data: any
}

const Photo = ({data}: TProps) => {
  const {
    urls: {small},
    likes,
  } = data

  return (
    <div className='w-64 '>
      <Image src={small} className='w-64 h-60 rounded-2xl' width={400} height={200} alt='' />
      <p>Likes: {likes}</p>
    </div>
  )
}

export default Photo

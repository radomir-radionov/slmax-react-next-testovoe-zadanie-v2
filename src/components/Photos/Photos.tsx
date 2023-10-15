'use client'

import {ChangeEvent, useEffect, useState} from 'react'
import {Photo} from '@/components/index'
import {filterPhotosByTopics, sortPhotosByLikes} from '@/helpers/index'
import {fetchPhotos} from '@/services/index'
import {TPhoto} from '@/types/index'
import topics from '@/mock/topics'
import {Pagination} from '../../modules/index.ts'

const Photos = () => {
  const [photos, setPhotos] = useState<TPhoto[]>([])
  const [filteredPhotos, setFilteredPhotos] = useState<TPhoto[]>([])
  const [isSortingDescending, setIsSortingDescending] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState<string>('all')

  const handleSortByLikes = () => {
    const sorted = sortPhotosByLikes(filteredPhotos, isSortingDescending)
    setFilteredPhotos(sorted)
    setIsSortingDescending(!isSortingDescending)
  }

  const handleTopicChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const topic = e.target.value
    setSelectedTopic(topic)

    if (topic === 'all') {
      setFilteredPhotos(photos)
    } else {
      const filtredPhotos = filterPhotosByTopics(photos, topic)
      setFilteredPhotos(filtredPhotos)
    }
  }

  useEffect(() => {
    fetchPhotos(setPhotos, setFilteredPhotos)
  }, [])

  return (
    <div className='max-w-6xl flex flex-col content-center items-center gap-6'>
      <div className='flex gap-2'>
        <button onClick={handleSortByLikes}>Sort by Likes</button>
        <select value={selectedTopic} onChange={handleTopicChange}>
          <option value='all'>All</option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>
      <Pagination photos={filteredPhotos} />
    </div>
  )
}

export default Photos

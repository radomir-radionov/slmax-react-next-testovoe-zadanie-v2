'use client'

import {ChangeEvent, Dispatch, SetStateAction, useState} from 'react'
import {filterPhotosByTopics, sortPhotosByLikes} from '@/helpers/index'
import topics from '@/mock/topics'
import {TPhoto} from '@/types/index.ts'

type TProps = {
  photos: TPhoto[]
  filteredPhotos: TPhoto[]
  setFilteredPhotos: Dispatch<SetStateAction<TPhoto[]>>
}

const DataManagement = ({photos, filteredPhotos, setFilteredPhotos}: TProps) => {
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

    topic === 'all' ? setFilteredPhotos(photos) : setFilteredPhotos(filterPhotosByTopics(photos, topic))
  }

  return (
    <div className='flex gap-2'>
      <button className='p-1 border-solid border-2 border-indigo-600 hover:bg-slate-100' onClick={handleSortByLikes}>
        Sort by Likes
      </button>
      <select className='border-solid border-2 border-indigo-600 hover:bg-slate-100' value={selectedTopic} onChange={handleTopicChange}>
        <option value='all'>All</option>
        {topics.map((topic) => (
          <option key={topic} value={topic}>
            {topic}
          </option>
        ))}
      </select>
    </div>
  )
}

export default DataManagement

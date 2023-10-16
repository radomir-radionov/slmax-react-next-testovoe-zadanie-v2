'use client'

import {useEffect, useState} from 'react'
import {fetchPhotos} from '@/services/index'
import {TPhoto} from '@/types/index'
import Link from 'next/link'
import {DataManagement, Pagination} from '../index.ts'

const Photos = () => {
  const [photos, setPhotos] = useState<TPhoto[]>([])
  const [filteredPhotos, setFilteredPhotos] = useState<TPhoto[]>([])

  useEffect(() => {
    fetchPhotos(setPhotos, setFilteredPhotos)
  }, [])

  return (
    <section className='w-full flex flex-col content-center items-center gap-6 p-2'>
      <div className='w-full flex justify-between gap-2 md:flex-col'>
        <DataManagement photos={photos} filteredPhotos={filteredPhotos} setFilteredPhotos={setFilteredPhotos} />
        <div className='flex gap-6'>
          <Link className='p-1 border-2 border-purple-600 hover:bg-slate-100' href='/watchlist'>
            WatchList
          </Link>
          <Link className='p-1 border-2 border-red-600 hover:bg-slate-100' href='/signIn'>
            Logout
          </Link>
        </div>
      </div>
      <Pagination photos={filteredPhotos} />
    </section>
  )
}

export default Photos

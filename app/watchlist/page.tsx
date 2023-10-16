'use client'

import Link from 'next/link'
import {useEffect, useState} from 'react'
import {Photo} from '@/components/index'
import {TPhoto} from '@/types/index'

const WatchList = () => {
  const [watchList, setWatchList] = useState<TPhoto[]>([])
  const userWatchList = JSON.parse(localStorage.getItem('watchlist') || '[]') as TPhoto[]

  useEffect(() => {
    setWatchList(userWatchList)
  }, [watchList, userWatchList])

  return (
    <section className='flex flex-col gap-3 p-2'>
      <header className='flex items-center gap-10'>
        <h2 className='text-4xl'>WatchList</h2>
        <Link href='/' className='p-1 border-2 border-purple-600 hover:bg-slate-100'>
          Back
        </Link>
      </header>

      <div className={`flex gap-8 flex-wrap min-h-[35rem] h-full ${watchList.length ? 'justify-start' : 'justify-center items-center'}`}>
        {watchList.length ? watchList.map((item) => <Photo key={item.id} data={item} view='watchlist' />) : <h2 className='text-4xl'>Empty data</h2>}
      </div>
    </section>
  )
}

export default WatchList

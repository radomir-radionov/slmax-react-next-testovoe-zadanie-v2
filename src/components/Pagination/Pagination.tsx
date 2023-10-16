'use client'

import {useState} from 'react'
import ReactPaginate from 'react-paginate'
import {TPhoto} from '@/types/common'
import {Photo} from '@/components/index'

type TProps = {
  photos: TPhoto[]
}

const Pagination = ({photos}: TProps) => {
  const [currentPage, setCurrentPage] = useState<number>(0)

  const handlePageClick = (data: {selected: number}) => setCurrentPage(data.selected)

  const itemsPerPage: number = 8
  const pageCount: number = Math.ceil(photos.length / itemsPerPage)
  const offset: number = currentPage * itemsPerPage

  const displayedData = photos.slice(offset, offset + itemsPerPage)

  return (
    <div className='w-full  flex flex-col justify-center gap-6 flex-wrap'>
      <div className={`flex gap-8 flex-wrap min-h-[35rem] h-full ${displayedData.length ? 'justify-start' : 'justify-center items-center'}`}>
        {displayedData.length ? displayedData.map((item) => <Photo key={item.id} data={item} />) : <h2 className='text-4xl'>Empty data</h2>}
      </div>
      <ReactPaginate
        className={`flex justify-center gap-2 ${displayedData.length ? '' : 'hidden'}`}
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  )
}

export default Pagination

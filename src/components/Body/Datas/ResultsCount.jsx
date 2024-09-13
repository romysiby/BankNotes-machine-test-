import React, { useContext }from 'react'
import { Context } from '../../../App'

function ResultsCount() {
  const { data } = useContext(Context)

  return (
    <>
      <div className='flex flex-row w-[100%] justify-between px-10 my-4'>
        <div className='flex flex-row'>
          <h1 className='text-gray-500'>Sort By</h1>
          <input type="text" />
        </div>

        <div className='flex flex-row'>
          <h1 className='mr-2 font-semibold'>{data.length}</h1>
          <h1 className='text-gray-500'>Results Found</h1>
        </div>
      </div>
    </>
  )
}

export default ResultsCount
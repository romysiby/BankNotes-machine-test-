import React from 'react'
import Filters from './Filters/Filters'
import Datas from './Datas/Datas'

function Body() {
  return (
    <div className='flex px-3 py-2 2.3xl:flex-row flex-col'>
        <Filters />
        <Datas />
    </div>
  )
}

export default Body
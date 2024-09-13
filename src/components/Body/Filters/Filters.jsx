import React from 'react'
import Categories from './Categories'
import Price from './Price'
import Rating from './Rating'
import Discount from './Discount'

function Filters() {
  return (
    <div className=''>
      <div className='2.3xl:w-[100%] grid grid-cols-2 xmob:grid-cols-3 px-4 2.3xl:grid-cols-1 justify-evenly 2.3xl:justify-normal flex-row 2.3xl:items-start'>
          {/* <button className='bg-orange-500 text-white rounded-full px-7 mx-4 py-1 h-fit'>Filter</button> */}
          <Categories />
          <Price />
          <Rating />
      </div>
      <Discount />
    </div>
  )
}

export default Filters
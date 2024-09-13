import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../../App'

function Price() {
  const { data } = useContext(Context)
  const [topPrice, setTopPrice] = useState(0)
  const [lowPrice, setLowPrice] = useState(0)

  useEffect(() => {
    const allPrices = data.map(obj => obj.price)

    setTopPrice(Math.max(...allPrices))
    setLowPrice(Math.min(...allPrices))
  })
  
  return (
    <div className='flex flex-col py-2 border-b-[1px] border-gray-200 2.3xl:w-[10em] w-[100%]'>
        <h1 className='font-semibold text-[16px] py-1'>Price</h1>
        <input type="range" />
        <div className='flex flex-row'>
            <p className='text-gray-500 px-1'>Price: </p>
            <h1>{lowPrice + ' - ' + topPrice}</h1>
        </div>
    </div>
  )
}

export default Price
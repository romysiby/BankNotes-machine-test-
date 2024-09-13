import React, { useContext } from 'react'
import { Context } from '../../../App'

import Star5 from "../../../../public/images/stars/5Star.png"
import Star4 from "../../../../public/images/stars/4Star.png"
import Star3 from "../../../../public/images/stars/3Star.png"
import Star2 from "../../../../public/images/stars/2Star.png"
import Star1 from "../../../../public/images/stars/1Star.png"

function Rating() {
  const { ratings, setRatings } = useContext(Context)

  const toggleFunc = (num) => {
    const res = ratings.find(n => n === num)
    
    if(res === num) {
      setRatings(prev => prev.filter(item => item !== num))
    } else {
      setRatings(prev => [...prev, num])
    }
  }
  
  return (
    <div className='flex flex-col mt-2 min-w-[100%] xmob:min-w-[100%]'>
        <h1 className='font-semibold text-[16px] mb-1 px-7'>Ratings</h1>

        <div className='flex flex-row items-center w-[80%] justify-evenly'>
            <input type="checkbox" name="" id="" onClick={e => toggleFunc(5)} />
            <div className='w-[100px]'>
              <img src={Star5} alt="" />
            </div>
            <h1>5.0</h1>
        </div>

        <div className='flex flex-row items-center w-[80%] justify-evenly'>
            <input type="checkbox" name="" id="" onClick={e => toggleFunc(4)}/>
            <div className='w-[100px]'>
              <img src={Star4} alt="" />
            </div>
            <h1>4.0</h1>
        </div>

        <div className='flex flex-row items-center w-[80%] justify-evenly'>
            <input type="checkbox" name="" id="" onClick={e => toggleFunc(3)} />
            <div className='w-[100px]'>
              <img src={Star3} alt="" />
            </div>
            <h1>3.0</h1>
        </div>

        <div className='flex flex-row items-center w-[80%] justify-evenly'>
            <input type="checkbox" name="" id="" onClick={e => toggleFunc(2)} />
            <div className='w-[100px]'>
              <img src={Star2} alt="" />
            </div>
            <h1>2.0</h1>
        </div>

        <div className='flex flex-row items-center w-[80%] justify-evenly'>
            <input type="checkbox" name="" id="" onClick={e => toggleFunc(1)} />
            <div className='w-[100px]'>
              <img src={Star1} alt="" />
            </div>
            <h1>1.0</h1>
        </div>

    </div>
  )
}

export default Rating
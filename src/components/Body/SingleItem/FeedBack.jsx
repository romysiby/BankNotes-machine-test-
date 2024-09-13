import React from 'react'
import { GetRatings } from '../Datas/DataHolder'

function FeedBack() {
  return (
    <div className=''>
        <h1 className=' text-center border-b-2 border-black pb-2 font-medium'>Customer FeedBack</h1>
        <div className='items-center flex flex-col'>
            <SingleFeedBack />
            <SingleFeedBack />
        </div>
    </div>
  )
}

function SingleFeedBack() {
    return (
        <div className='bg-gray-50 w-fit my-2 py-2 px-3 rounded-md shadow-lg'>
            <div className=' flex flex-row'>
                <div className='bg-black w-[2.3em] h-[2.3em] rounded-full'></div>
                <div className='ml-2'>
                    <h1 className='font-medium'>Berserk1997</h1>
                    <div className='w-[3.2em]'>
                        <GetRatings rating={3} />
                    </div>
                </div>
            </div>
            <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id rem ipsa laborum pariatur.</p>
            </div>
        </div>
    )
}

export default FeedBack
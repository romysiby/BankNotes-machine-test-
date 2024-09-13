import React from 'react'
import './Footer.css'

function Subscribe() {
  return (
    <div className='bg-gray-200 w-full h-fit flex flex-col items-center 1.1xl:justify-evenly 1.1xl:flex-row'>
      <Text />
      <Email />
      <SocialMedia />
    </div>
  )
}

function Text() {
    return (
        <div className='py-2 flex flex-col justify-center 1.1xl:w-[30%] items-center 1.1xl:items-start'>
          <h1 className='text-[1.3em] font-bold'>Subscibe to Newsletter</h1>
          <p className='text-gray-500 text-[13px]'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam tempore totam molestiae veritatis
          </p>
        </div>
    )
}

function Email() {
    return (
        <div className='py-2 1.1xl:w-[40%] w-[80%] flex items-center'>
          <input type="text" className='rounded-full px-5 w-[70%] h-[2.3em]' placeholder='Your email address' />
          <button className='bg-orange-500 text-white px-4 h-[2.3em] z-10 py-2 rounded-full'>Subscribe</button>
        </div>
    )
}

function SocialMedia() {
    return (
        <div className='py-2 flex flex-row min-w-[14%] justify-evenly items-center'>
          <div className='bg-black h-[2.5em] w-[2.5em] rounded-full mx-1'></div>
          <div className='bg-black h-[2.5em] w-[2.5em] rounded-full mx-1'></div>
          <div className='bg-black h-[2.5em] w-[2.5em] rounded-full mx-1'></div>
          <div className='bg-black h-[2.5em] w-[2.5em] rounded-full mx-1'></div>
        </div>
    )
}

export default Subscribe
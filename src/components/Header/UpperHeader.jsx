import React from 'react'

function UpperHeader() {
  return (
    <>
      <div className='bg-black text-gray-300 font-thin flex flex-col items-center w-full justify-between px-10 py-1 xlmob:flex-row'>
        <h1 className='font-thin text-center'>Store Location: Lincon- 344, illions, Chicago, USA</h1>
        <div className='flex flex-row bg-black w-fit justify-between'>
            <h1>Eng USD | Sign in / Sign up</h1>
        </div>
      </div>
    </>
  )
}

export default UpperHeader
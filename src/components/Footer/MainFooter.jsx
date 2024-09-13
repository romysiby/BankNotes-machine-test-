import React from 'react'
import { LogoAndTitle } from '../Header/Title'
import LeafIcon from "../../../public/images/leaf-icon.png"

function MainFooter() {
  return (
    <div>
      <Contacts />
    </div>
  )
}

function Contacts() {
  return (
    <div className='bg-black h-[30vh] flex flex-col justify-evenly'>
      <div className=' flex flex-row w-fit items-center'>
          <div className='w-[2.4em] h-[2.4em] mx-2'>
            <img src={LeafIcon} alt="" />
          </div>
          <h1 className='font-semibold text-white text-[30px] '>BankNotes</h1>
      </div>
        <h1 className='text-gray-400 w-[30%] text-[15 px]'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi saepe perferendis iure maiores eveniet nostrum perspiciatis 
        ipsa, maxime placeat ipsam iusto?
        </h1>
        <div className='flex text-white flex-row w-[20%] justify-evenly'>
          <h1 className='border-none border-b-green-400 border-[3px]'>(309) 343-34322</h1>
          <h1 className='text-gray-400'>or</h1>
          <h1 className='border-none border-b-green-400 border-[3px]'>domain@gmail.com</h1>
        </div>
    </div>
  )
}

function Others() {
  return (
    <div>
      
    </div>
  )
}

export default MainFooter
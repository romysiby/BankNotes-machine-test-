import React, { useContext } from 'react'
import LeafIcon from "../../../public/images/leaf-icon.png"
import CartIcon from "../../../public/images/cart-icon.png"
import { Context } from '../../App'
import './Title.css'

function Title() {
  return (
    <div className='flex 2.2xl:flex-row 2.2xl:h-fit h-[13em] flex-col items-center justify-evenly 2.2xl:justify-between px-10 2.2xl:py-2 border-b-[1px] border-gray-200'>
        <LogoAndTitle />
        <SearchInput />
        <Cart />
    </div>
  )
}

export function LogoAndTitle() {
    return (
        <div className='flex flex-row w-fit items-center'>
            <div className='w-[3em] h-[3em] mx-2'>
                <img src={LeafIcon} alt="" srcset="" />
            </div>
            <h1 className='font-semibold text-[40px] '>BankNotes</h1>
        </div>
    )
}

function SearchInput() {
    return (
        <div className='flex flex-row items-center w-[90%] justify-center 2.2xl:w-[40%] xlmob:w-[70%] xlmob:justify-center'>
            <input type="text" placeholder='Search' className='px-3 h-[2.6em] outline-none border-gray-300 border-[1px] rounded-l-md w-[60%]' />
            <button className='bg-blue-400 text-white px-4 py-2 rounded-r-md h-[2.6em]'>Search</button>
        </div>
    )
}

function Cart() {
    const { cartData } = useContext(Context)
    return (
        <div className='flex flex-row xlmob:min-w-[17%] items-center justify-evenly '>
            <div className='bg-black w-[3em] h-[3em] mx-2'></div>
            <div className='w-[3.4em] h-[3em]'>
                <div className='bg-green-600 text-white flex items-center justify-center absolute ml-10 w-[20px] h-[20px] rounded-full'>
                    {cartData.count}
                </div>
                <img src={CartIcon} alt="" srcset="" />
            </div>
            <div className='mx-1 h-[3em] xlmob:text_holder text_holder2 '>
                <p className='font-normal text-[80%] 1xl:text-[90%]'>Shopping Cart</p>
                <h1 className='font-medium'>{ '$' + Math.floor(cartData.amount) }</h1>
            </div>
        </div>
    )
}

export default Title
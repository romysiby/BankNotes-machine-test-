import React, { useContext, useState } from 'react'
import "./Datas.css"
import Star5 from "/public/images/stars/5Star.png"
import Star4 from "/public/images/stars/4Star.png"
import Star3 from "/public/images/stars/3Star.png"
import Star2 from "/public/images/stars/2Star.png"
import Star1 from "/public/images/stars/1Star.png"

import BagIcon from "../../../../public/images/bag-icon.png"

import { Context } from '../../../App'
import { LogoAndTitle } from '../../Header/Title'

function DataHolder() {
    const [limit, setLimit] = useState(8)
    const [prevLimit, setPrevLimit] = useState(0)
    const { data, isError, isLoading, category, ratings } = useContext(Context)
    
    let limitedData

    // filter ratings
    const filteredArray = data.filter(obj => {
        return ratings.includes(Math.floor(obj.rating.rate))
    })

    // combine ratings and categories
    if(filteredArray.length > 0) {
        if(category !== '') {
            limitedData = filteredArray.filter(dat => dat.category === category)
        } else {
            limitedData = filteredArray
        }
    } else {
        limitedData = data
        if(category !== '') {
            limitedData = data.filter(dat => dat.category === category)
        }
    }

    if(category === '' && ratings.length <= 0) {
        limitedData = data.slice(prevLimit, limit)
    }
    
    if(isLoading) {
        return <h1>Loading....</h1>
    }

    if(isError) {
        return <h1>There was an Error....</h1>
    }
    
    return (
        <>
            <div className='my-2 px-7 grid xmob:grid-cols-2 xlmob:grid-cols-3 1xl:grid-cols-4 grid-cols-1 gap-8'>
                {
                    limitedData.map(item => {
                        return <Item rating={item.rating.rate} title={item.title} price={item.price} image={item.image} />
                    })
                }
            </div>
            <div className='w-[100%] flex flex-col justify-center items-center py-6'>
                <Navigate prevLimit={prevLimit} nav={limit} prev={setPrevLimit} next={setLimit} />
            </div>
        </>
    )
}

function Navigate(props) {
    const [page, setPage] = useState(1)
    
    return (
      <div className="flex font-medium flex-row px-8 w-[30%] justify-evenly items-center">
        <h1 onClick={e => {
            if(props.prevLimit > 0) {
                setPage(prev => prev - 1)
                props.prev(prev => prev - 4)
                props.next(prev => prev - 4)
            }
        }} className='cursor-pointer'>{'<'}</h1>
        <h1 className="font-bold bg-blue-500 px-2 rounded-full text-white">{page}</h1>
        <h1 onClick={e => {
            if(props.nav <= 20) {
                setPage(prev => prev + 1)
                props.prev(prev => prev + 4)
                props.next(prev => prev + 4)
            }
        }} className='cursor-pointer'>{'>'}</h1>
      </div>
    )
}

function Item(props) {
    const { setCartData } = useContext(Context)
    const [toggle, setToggle] = useState(false)

    const addToCart = (price) => {
        setCartData(prev => {
            const newAmount = toggle ? prev.amount - price : prev.amount + price;
            const newCount = toggle ? prev.count - 1 : prev.count + 1;
    
            return { amount: newAmount, count: newCount };
        });
    }

    return (
        <div className='border-black border-[2px] w-[14em] h-[20em] rounded-md hover:shadow-xl shadow-green-500'>
            <div className='w-full h-[70%]'>
                <img src={props.image} alt="none" className='w-[13em] h-[13em]'  />
            </div>
            <div className='flex flex-row justify-between px-3 py-2'>
                <div className='flex flex-col w-[80%]'>
                    <h1 className='text-gray-500 text-[14px] truncate'>{props.title}</h1>
                    <h1 className='font-semibold'>{'$'+ props.price}</h1>
                    <div className='h-[1.3em] w-[6em] text-white'>
                        <GetRatings rating={props.rating} />
                    </div>
                </div>
                <div>
                    <div onClick={e => {
                        setToggle(prev => !prev)
                        addToCart(props.price)
                    }} 
                    className={'h-[3em] px-13 w-[3em] border-black hover:cursor-pointer flex items-center justify-center border-[1px] rounded-full '}>
                        {/* <img src={BagIcon} alt="" className='w-[2em]' /> */}
                        { toggle ? ' Rem ': ' Add ' }
                    </div>
                </div>
            </div>
        </div>
    )
}

function GetRatings(props) {
    const { rating } = props
    
    if(Math.floor(rating) === 5) {
        return <img src={Star5} alt="" /> 
    }

    if(Math.floor(rating) === 4) {
        return <img src={Star4} alt="" /> 
    }

    if(Math.floor(rating) === 3) {
        return <img src={Star3} alt="" /> 

    }

    if(Math.floor(rating) === 2) {
        return <img src={Star2} alt="" /> 
    }

    if(Math.floor(rating) === 1) {
        return <img src={Star1} alt="" /> 
    }
}

export default DataHolder
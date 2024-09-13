import React, { useState, useContext, useEffect, useMemo, useCallback } from 'react'
import { Context } from '../../../App'
import { useParams } from 'react-router-dom'
import { useFetchData } from '../../../hooks/useFetchData'
import { GetRatings, Item } from '../Datas/DataHolder'


function SingleItem(props) {
    const { id } = useParams()
    const { setCartData, setCart, cart } = useContext(Context)
    const [toggle, setToggle] = useState(false)
    const [refresh, setRefresh] = useState(false)
    let color
    
    const { data, isError, isLoading } = useFetchData('https://fakestoreapi.com/products/' + id)

    const inclues = cart.includes(data.title)
    
    props.set(data.category)
    props.ignore(data.title)
    

    const addToCart = (price) => {
        setCartData(prev => {
            const newAmount = inclues ? prev.amount - price : prev.amount + price;
            const newCount = toggle ? prev.count - 1 : prev.count + 1;
            
            return { amount: newAmount, count: newCount };
        });
    }
    
    if(isLoading) {
        return <h1>Loading.....</h1>
    }

    if(inclues) {
        color = 'bg-red-400'
    } else {
        color = 'bg-blue-400'
    }

    return (
        <div className='flex 2.3xl:flex-row py-10 flex-col w-[100%] h-fit px-[10em] items-center justify-between'>
            <div className='2.3xl:w-fit xlmob:w-[20vw] xlmob:mx-10 mx-0 bg-red-300 w-[7em] 2.3xl:mb-0 mb-16'>
                <img src={data.image} alt="" />
            </div>
            <div className='w-[47vw]'>
                <h1 className='font-bold text-[2em] truncate'>{data.title}</h1>
                <div className='w-[6em]'>
                    <GetRatings rating={data.rating.rate} />
                </div>
                <h1 className='font-semibold text-[1.4em]'>{data.price + ' $'}</h1>
                <p className='text-[14px] my-3'>
                    {data.description}
                </p>
                <div className='flex xlmob:flex-row flex-col mt-4 items-center'>
                    <div className='flex flex-row 2.3xl:w-[8vw] w-[8em] py-1 justify-evenly items-center rounded-full xlmob:mb-0 mb-4 bg-gray-300'>
                        <div className='px-[12px] py-[5px] cursor-pointer rounded-full bg-gray-100'>-</div>
                        <h1 className='text-black'>{'4'}</h1>
                        <div className='px-[12px] py-[5px] cursor-pointer rounded-full bg-gray-100'>+</div>
                    </div>
                    <div className='mx-3'>
                        <h1 onClick={e => {
                            setToggle(prev => !prev)
                            addToCart(data.price)
                            if(inclues) {
                                setCart(prev => prev.filter(item => item !== data.title))
                            } else {
                                setCart(prev => [...prev, data.title])
                            }
                        }} className={'px-[5vw] font-medium cursor-pointer text-white py-2 rounded-full ' + color}>
                            { !inclues ? 'Add to Cart' : 'Remove From Cart' }
                        </h1>
                    </div>
                </div>
                <div className='flex flex-row mt-2'>
                    <h1 className='font-medium mx-2'>Category: </h1>
                    <h1>{data.category}</h1>
                </div>
            </div>
        </div>
    )
}

export default SingleItem
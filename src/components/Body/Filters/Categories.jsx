import React, { useContext, useState } from 'react'
import { Context } from '../../../App'

function Categories() {
    const { data } = useContext(Context)
    const cate = data.map(item => item.category)
    const filterd = new Set(cate)
    const list = [...filterd]

  return (
    <div className='flex flex-col 2.3xl:w-[100%] w-[100%] h-fit py-3 border-b-[1px] border-gray-200'>
        <div className='mb-2'>
            <h1 className='font-semibold text-[16px]'>All Categories</h1>
        </div>
        <div>
            {
                list.map(item => {
                    return <SingleCategory name={item} />
                })
            }
        </div>
    </div>
  )
}

function SingleCategory(props) {
    const [isChecked, setIsChecked] = useState(false)
    const { setCategory } = useContext(Context)
    const { name, count } = props
    
    const handleChange = (event) => {
        if(isChecked) {
            setIsChecked(false)
            setCategory('')
        } else {
            setIsChecked(true)
            setCategory(event.target.value)
        }
    }
    
    return (
        <div className='flex flex-row items-center w-fit mb-1'>
            <input type="radio" className='mx-1' value={name} onClick={handleChange} checked={isChecked} />
            <h1>{name}</h1>
            {/* <h1 className='text-gray-400 mx-1'>{"(" + count + ")"}</h1> */}
        </div>
    )
}

export default Categories
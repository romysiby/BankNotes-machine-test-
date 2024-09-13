import React, { useState } from 'react'
import SingleItem from './SingleItem'
import FeedBack from './FeedBack'
import Related from './Related'

function Main() {
    const [category, setCategory] = useState('')   
    const [ignore, setIgnore] = useState('') 
    
    return (
        <div>
            <SingleItem set={setCategory} ignore={setIgnore} />
            <FeedBack />
            <Related category={category} ignore={ignore} />
        </div>
    )
}

export default Main
import React, { useContext } from 'react'
import { useFetchData } from '../../../hooks/useFetchData'
import { Context } from '../../../App'
import { Item } from '../Datas/DataHolder'
import { Link } from 'react-router-dom'

function Related(props) {
    const { data } = useContext(Context)

    const filterdData = data.filter((item) => item.category === props.category)
                            .filter(item => item.title !== props.ignore)
        
    return (
        <div className='flex flex-row justify-center my-10'>    
            <div className='grid xmob:grid-cols-2 xlmob:grid-cols-3 ml-0 2.3xl:ml-52 xmob:ml-24 1xl:grid-cols-4 grid-cols-1 gap-8'>
                {
                    filterdData.map(item => {
                        return <Link to={`/product/${item.id}`}>
                            <Item rating={item.rating.rate} title={item.title} price={item.price} image={item.image} />
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export default Related
import React from 'react'
import { IoAddCircleOutline } from "react-icons/io5"
import "./Card.scss"

function Card({mobile, setBagItem}) {

    const setBag = (item) => {
        setBagItem(item)
    }
    return (
        <div className='card'>
            <img src={mobile.imgUrl} />
            <h3>{mobile.name}</h3>
            <div className='card-info' >
                <b>{mobile.price}</b>
                <IoAddCircleOutline 
                    onClick={() => setBag(mobile)}
                />
            </div>
        </div>
    )
}

export default Card
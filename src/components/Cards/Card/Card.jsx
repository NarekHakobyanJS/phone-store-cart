import React, { useState } from 'react'
import { IoAddCircleOutline, IoCheckmarkCircleOutline } from "react-icons/io5"
import { NavLink } from 'react-router-dom'
import "./Card.scss"

function Card({ mobile, setBagItem, sendPage }) {
    const [clicked, setClicked] = useState(false)

    const setBag = (item) => {
        setClicked(true)
        setBagItem(item)
    }

    const mobilePage = (item) => {
        sendPage(item)
    }
    return (
        <div className='card' onClick={() => mobilePage(mobile)}>
            <NavLink to="/mobilePage">
            <img src={mobile.imgUrl}/>
            <h3>{mobile.name}</h3>
            </NavLink>
            <div className='card-info' >
                <b>{mobile.price}</b>
                <div>
                    {clicked ?
                        <IoCheckmarkCircleOutline 
                        className='clikced'
                        />
                        :
                        <IoAddCircleOutline
                            onClick={() => setBag(mobile)}
                        />
                    }
                </div>

            </div>
        </div>
    )
}

export default Card
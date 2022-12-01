import React, { useCallback } from 'react'
import "./Cart.scss"
import {IoBackspaceOutline} from "react-icons/io5"

function Cart({ bag, incrementPrice, incrementStore, decrementPrice, decrementStore, removeStore}) {

    const increment = (id) => {
        incrementStore(id)
        incrementPrice(id) 
    }
    const decrement = (id) => {
        decrementStore(id)
        decrementPrice(id)
    }
    const remove = (id) => {
        removeStore(id)
    }
    return (
        <div className='cart'>
            <h3>{bag.name}</h3>
            <div className='cart-description'>
                <img src={bag.imgUrl} />
                <div className='cart-count'>
                    <button onClick={() => increment(bag.id)}>+</button>
                    <span>{bag.count}</span>
                    <button onClick={() => decrement(bag.id)}>-</button>
                </div>
                <span>{bag.price}</span>
                <span>{bag.summa}</span>
            </div>
            <IoBackspaceOutline 
                className='cart-remove'
                onClick={() => remove(bag.id)}
                />
        </div>
    )
}

export default Cart
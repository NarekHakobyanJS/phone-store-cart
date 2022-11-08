import React from 'react'
import "./Cart.scss"

function Cart({ bag, incrementStore, decrementStore}) {

    const increment = (id) => {
        incrementStore(id)
    }
    const decrement = (id) => {
        decrementStore(id)
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
                <span>458$</span>
            </div>
        </div>
    )
}

export default Cart
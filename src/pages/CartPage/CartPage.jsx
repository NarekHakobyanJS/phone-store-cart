import React from 'react'
import Cart from './Cart'
import "./CartPage.scss"

function CartPage(props) {
  return (
    <div className='cart-page'>
      {props.bagPage.map(bag => <Cart bag={bag}
        incrementStore={props.incrementStore}
        decrementStore={props.decrementStore} />)}
    </div>
  )
}

export default CartPage
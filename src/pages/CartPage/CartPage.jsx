import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoArrowBackCircleSharp } from "react-icons/io5"
import Cart from './Cart'
import "./CartPage.scss"

function CartPage(props) {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  return (
    <div className='cart-p'>
      <IoArrowBackCircleSharp 
      onClick={goBack}
      className='go-back' />
      <div className='cart-page'>
        {props.bagPage.map(bag => <Cart bag={bag}
          incrementStore={props.incrementStore}
          decrementStore={props.decrementStore}
          removeStore={props.removeStore}
          incrementPrice={props.incrementPrice}
          decrementPrice={props.decrementPrice}
        />)}
      </div>
    </div>
  )
}

export default CartPage
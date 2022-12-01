import React from 'react'
import { BsBagDash } from 'react-icons/bs';
import './Header.scss';
import { useDispatch, useSelector } from "react-redux"
import {setSearchAC, setSerchItemAC} from "../../redux/cardReducer"
import { NavLink } from 'react-router-dom';

function Header() {
  let bagLengths = useSelector(state => state.bagPage.bagPage)
  let search = useSelector(state => state.cardPage.search)
  let dispatch = useDispatch()
  
  const searchItem = (e) => {
    let text = e.target.value
    dispatch(setSearchAC(text))
    dispatch(setSerchItemAC(text))
  }

  return (
    <header className='header'>
      <NavLink to="/" className='header-logo'>
        <img src="https://i.pinimg.com/736x/33/cd/8c/33cd8c6ed4852f8b14d1dfe7a77974f5.jpg" />
      </NavLink>
      <div>

        <input 
        type="text" 
        value={search}
        onChange={(e) => searchItem(e)}
        />
        <NavLink
          to="/clientBag"
          className='header-bag'>
          <BsBagDash />
          <span>{bagLengths.length}</span>
        </NavLink>
      </div>
    </header>
  )
}

export default Header
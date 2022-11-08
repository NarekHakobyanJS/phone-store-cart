import React from 'react'
import { BsBagDash, BsBagPlus } from 'react-icons/bs';
import './Header.scss';
import {useSelector} from "react-redux"
import { NavLink } from 'react-router-dom';

function Header() {
  let bagLengths = useSelector(state => state.bagPage.bagPage)

  return (
    <header className='header'>
        <div className='header-logo'>
            <img src="https://i.pinimg.com/736x/33/cd/8c/33cd8c6ed4852f8b14d1dfe7a77974f5.jpg" />
        </div>
        <NavLink 
        to="/clientBag"
        className='header-bag'>
            <BsBagDash />
            <span>{bagLengths.length}</span>
        </NavLink>
    </header>
  )
}

export default Header
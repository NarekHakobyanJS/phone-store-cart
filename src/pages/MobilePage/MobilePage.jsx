import React from 'react'
import "./MobilePage.scss"

function MobilePage({mobilePage}) {
  return (
    <div className='mobile-page-description'>
      <h1>{mobilePage.name}</h1>
      <div className='mobile-page-info'>
        <img src={mobilePage.imgUrl} />
        <div className='mobile-page-desc'>
          <p>ram : <b>{mobilePage.ram}</b></p>
          <p>memory : <b>{mobilePage.memory}</b></p>
          <p>price : <b>{mobilePage.price}</b></p>
        </div>
      </div>
    </div>
  )
}

export default MobilePage
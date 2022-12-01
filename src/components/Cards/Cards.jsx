import React from 'react'
import Card from './Card/Card'
import "./Cards.scss"

function Cards({ mobileData, setBagItem, sendPage }) {
  let mobileItem =
    mobileData.map(mobile => <Card mobile={mobile}
      setBagItem={setBagItem}
      sendPage={sendPage}
      />)
  return (
    <div className='cards'>
      {mobileItem}
    </div>
  )
}

export default Cards
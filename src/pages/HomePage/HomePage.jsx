import React, { useEffect } from 'react'
import { CardsContainer } from '../../components/Cards/CardsContainer'
import "./HomePage.scss"

function HomePage() {

    return (
        <div className='home'>
            <CardsContainer />
        </div>
    )
}

export default HomePage
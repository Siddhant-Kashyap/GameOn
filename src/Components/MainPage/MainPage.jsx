import React from 'react'
import VideoCall from '../VideoCall/VideoCall'
import GameSection from '../GameSection/GameSection'
import "./MainPage.css"
import NavBar from '../NAvBar/NavBar'
const MainPage = () => {
  return (
    <>
 
    <div className='main-div'>
        <div className='left-div'>
            <div className='video-call'><VideoCall/></div>
            <div className='video-call'><VideoCall/></div>
        </div>
        <div className='right-div'>
            <GameSection/>
        </div>

    </div>
    </>
  )
}

export default MainPage
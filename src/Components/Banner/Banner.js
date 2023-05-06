import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className='Banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='bannerBtn'>
                <button className='button'>Play</button>
                <button className='button'>More Info</button>
            </div>
            <h1 className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</h1>
            </div>    
            <div className="fade"></div>  
    </div>
  )
}

export default Banner

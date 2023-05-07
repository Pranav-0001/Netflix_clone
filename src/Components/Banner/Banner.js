import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY,IMAGE_URL} from '../../Constants/Constants'
function Banner() {
  const [movie,setMovie]=useState({})
  useEffect(()=>{
    axios.get(`trending/all/day?api_key=${API_KEY}`).then((res)=>{
      let i=Math.random()*10
      i=Math.floor(i)
      setMovie(res.data.results[i])
    }).catch(err=>{
      // alert('Something went wrong')
      console.log(err);
    })
  },[])
  return (
    <div className='Banner' style={{backgroundImage:`url(${movie ? IMAGE_URL+movie.backdrop_path : ''})`}}>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title || movie.name : ''} </h1>
            <div className='bannerBtn'>
                <button className='button'>Play</button>
                <button className='button'>More Info</button>
            </div>
            <h1 className='description'>{movie ? movie.overview: ''}</h1>
            </div>    
            <div className="fade"></div>  
    </div>
  )
}

export default Banner

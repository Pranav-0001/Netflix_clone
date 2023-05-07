import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, IMAGE_URL } from '../../Constants/Constants'
import Youtube from 'react-youtube'

function RowPost(props) {
  
  useEffect(() => {
    axios.get(props.url).then((res)=>{
     
      setMovies(res.data.results)
    }).catch(err=>{
      // alert('Something went wrong')
      console.log(err);
    })
 
  })
  const [Vid, setVid] = useState('')
  const [movies,setMovies] = useState([])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  function videoHelp(id){
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
      if(res.data.results.length!==0){
        setVid(res.data.results[0].key);
      }else{
        console.log("empty");
      }
      
    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>
          <div>
            <img onClick={()=>{videoHelp(obj.id)}} src={`${ IMAGE_URL+obj.backdrop_path || IMAGE_URL+obj.poster_path }`} className={props.isSmall? "small-poster" :'poster'} alt=""  />
         
            </div>
        
          
        )}
      </div>
      {Vid ?  <Youtube videoId={Vid}  opts={opts} /> : null}

    </div>
  )
}

export default RowPost

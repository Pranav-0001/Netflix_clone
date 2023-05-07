import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar' >
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png?20170904093427" alt="logo" />
      <div className='navitems'>
        <p>Home</p>
        <p>Tv Shows</p>
        <p>Movies</p>
        <p>News&Populr</p>
        <p>My List</p>
        <p>Browse by language</p>
        
      </div>
      <img className='avatar' src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" alt="avatar" />
    </div>
  )
}

export default Navbar

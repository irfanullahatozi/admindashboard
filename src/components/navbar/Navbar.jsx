import React from 'react'
import './navbar.scss'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>CodeTune</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className='icon' />
        <img src="/app.svg" alt="" className='icon' />
        <img src="/expand.svg" alt="" className='icon' />
        <div className="notifications">
          <img src="/notifications.svg" alt="" className='icon' />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://images.pexels.com/photos/8387170/pexels-photo-8387170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='icon' />
          <span>Jane</span>
        </div>
        <img src="/settings.svg" alt="" className='icon' />

      </div>
    </div>
  )
}

export default Navbar

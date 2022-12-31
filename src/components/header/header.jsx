import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../assets/icon/icon.png'
import useAuth from '../../custom-hooks/useAuth'
import './header.css'

function Header() {
  const {currentUser} = useAuth()
  return (
    <header>
        <div className='header'>
            <Link to="/">
              <h1>Magni University</h1>
            </Link>
            <div className='profile-content'>
                <h3>{currentUser? currentUser.displayName : <Link to="/login">Try to login</Link>}</h3>
                <div className='img-profile'>
                    <img src={currentUser? currentUser.photoURL : Icon}/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
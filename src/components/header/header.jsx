import React from 'react';
import Icon from '../../assets/icon/icon.png'

import './header.css'

function Header() {
  return (
    <header>
        <div className='header'>
            <h1>Magni University</h1>
            <div className='profile-content'>
                <h3>Anabela</h3>
                <div className='img-profile'>
                    <img src={Icon}/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
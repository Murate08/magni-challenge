import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../../assets/icon/icon.png'
import useAuth from '../../custom-hooks/useAuth'
import './header.css'
import {motion} from 'framer-motion'
import { signOut } from "firebase/auth";
import { auth } from '../../firebase.config';

function Header() {
  const navigate = useNavigate()
  const {currentUser} = useAuth()
  const profileActionRef = useRef(null) 
  
  const logout = ()=>{
    signOut(auth).then(()=>{
        console.log('Ficamos a tua espera, Ate ja!')
        navigate('/')
    }).catch(err=>{
        console.log(err.message)
    })
}
  
  return (
    <header>
      <div className='header'>
        <div className='top-header'>
          <Link to="/">
            <h1>Magni University</h1>
          </Link>
            {currentUser ?(
                <>
                  <motion.button whileTap={{scale:1.2}} className='btn-logout' onClick={logout}><i class="ri-logout-box-line"></i>Logout</motion.button>   
                </>
                ) : (
                <div >          
                  <p>You don't have permission to add Teacher and Student, please login or create an account</p>         
                </div>
            )}
          </div>
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
import React from 'react';
import RoutesScreen from '../../routes/Routes';
import Footer from '../footer/footer';

import Header from '../header/header'
function Layout() {
  return (
    <>
        <Header/>
        <div>
            <RoutesScreen/>
        </div>
        <Footer/>
    </>
  )
}

export default Layout;
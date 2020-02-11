import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import './styles/index.scss'

const Layout = (props) => {
    return (
        <div>
            <div className='container'>
                <Navbar activeNavItem1={!!props.activeNavItem1} activeNavItem2={!!props.activeNavItem2}/>
                {props.children}
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;
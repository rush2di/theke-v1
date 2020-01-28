import React from 'react';
import thekeLogo from '../../static/thekeLogo.svg';
import {Link} from 'gatsby';
import iconFb from '../assets/facebook.svg'
import iconIg from '../assets/instagram.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='fgrid'>
                <div className='logo'><img src={thekeLogo} alt='theke'/></div>
                <div className='apropos'>
                    <h3>à propos de nous</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus velit quas necessitatibus maiores saepe non omnis suscipit consectetur dolorum <br/><Link to='/apropos'>savoirs plus</Link></p>
                </div>
                <div className='contact'>
                    <h3>contactez nous</h3>
                    <span>(212) 115-2585</span>
                    <span>theke-team@example.com</span>
                    <div className="social">
                        <span><img src={iconIg} alt="instagram"/></span>
                        <span><img src={iconFb} alt="facebook"/></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
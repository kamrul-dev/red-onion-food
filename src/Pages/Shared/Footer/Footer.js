import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <div className='pt-5 pb-5' style={{ backgroundColor: '#1F1F1F', color: 'white' }}>
                <div className='row container mx-auto'>
                    <div className="col-6">
                        <div>
                            <img width="80px" src={logo} alt="" />
                        </div>
                    </div>
                    <div className="col-3">

                        <ul className='footer-list'>
                            <li><Link to='/'>About online food</Link></li>
                            <li><Link to='/'>Read our blog</Link></li>
                            <li><Link to='/'>Sign up to deliver</Link></li>
                            <li><Link to='/'>Add your restuarant</Link></li>
                        </ul>
                        {/* <Link to='/'>About online food</Link>
                        <Link to='/'>Read our blog</Link>
                        <Link to='/'>Sign up to deliver</Link>
                        <Link to='/'>Add your restuarant</Link> */}
                    </div>
                    <div className="col-3">
                        <ul className='footer-list'>
                            <li><Link to='/'>Get help</Link></li>
                            <li><Link to='/'>Read FAQs</Link></li>
                            <li><Link to='/'>View all cities</Link></li>
                            <li><Link to='/'>Resruarants near me</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="row container mx-auto pt-5">
                    <div className="col-6">
                        <p>Copyright &copy; 2022 red onion food</p>
                    </div>
                    <div className="col-2">
                        <p>Privacy Policy</p>
                    </div>
                    <div className="col-2">
                        <p>Terms of Use</p>
                    </div>
                    <div className="col-2">
                        <p>Pricing</p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Footer;

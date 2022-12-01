import React from 'react';
import '../styles/navbar.css';
import logo from "../assets/logo.png"
//import LoginModal from './LoginModal';
//import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import Cart from '../pages/Cart';
//import { useDispatch } from 'react-redux';
//import { getPurchasesThunk, getUserCartThunk } from '../redux/actions';

const NavBar = () => {

  
    
    return (
        <div>
            <nav className='navbar'>
                <div className='logo_container'> 
                <Link to="/">
                        <div><img className='logo' src={logo} alt="logo"/></div>
                </Link>
                </div>
                <div className='text_container'><Link to="/enterprise">New Enterprise</Link></div>
                <div className='text_container'><Link to="/login"> Login</Link></div>
                <div className='text_container'><Link to="/newuser"> New User</Link></div>
                
            </nav>
        </div>
    );
};

export default NavBar;

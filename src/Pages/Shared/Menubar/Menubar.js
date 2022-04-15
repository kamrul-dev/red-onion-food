import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Menubar.css';

const Menubar = () => {
    return (
        <div>
            <nav className='menu-container'>
                <div className='menu-list'>
                    <NavLink to='/breakfast'>Breakfast</NavLink>
                    <NavLink to='/lunch'>Lunch</NavLink>
                    <NavLink to='/dinner'>Dinner</NavLink>
                </div>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Menubar;
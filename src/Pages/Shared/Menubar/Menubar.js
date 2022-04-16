import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Menubar.css';

const Menubar = () => {
    return (
        <div>
            <nav className='menu-container'>
                <div className='menu-list'>
                    <NavLink to='/breakfast' className={({ isActive }) => (isActive ? "active-link" : "link")}>Breakfast</NavLink>
                    <NavLink to='/lunch' className={({ isActive }) => (isActive ? "active-link" : "link")}>Lunch</NavLink>
                    <NavLink to='/dinner' className={({ isActive }) => (isActive ? "active-link" : "link")}>Dinner</NavLink>
                </div>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Menubar;
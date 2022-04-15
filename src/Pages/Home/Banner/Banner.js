import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container d-flex align-items-center justify-content-center'>
            <div className='search-field d-flex'>
                <input className='form-control' type="search" name="" id="" placeholder='Search your food...' />
                <Button variant="outline-success">Search</Button>
            </div>
        </div>
    );
};

export default Banner;
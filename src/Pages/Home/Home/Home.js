import React from 'react';
import Header from '../../Shared/Header/Header';
import Menubar from '../../Shared/Menubar/Menubar';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='container'>
            <Header></Header>
            <Banner></Banner>
            <Menubar></Menubar>
        </div>
    );
};

export default Home;
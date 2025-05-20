import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import Footer from '../Component/Footer/Footer';
import Lower from '../Component/Footer/Lower';

const RootLayout = () => {
    return (
        <div className='dark:bg-black dark:text-white'>
            <div className='shadow sticky top-0 z-30'>
                <Navbar></Navbar>
                {/* <labez */}
            </div>
            <Outlet></Outlet>
            <div className='bg-base-300'>
                <Footer></Footer>
                <Lower></Lower>
            </div>
            <ToastContainer />




        </div>
    );
};

export default RootLayout;
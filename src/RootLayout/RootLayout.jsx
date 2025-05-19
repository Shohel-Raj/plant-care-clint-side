import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div className='dark:bg-black dark:text-white'>
            <div className='shadow sticky to-0% flex '>
                <Navbar></Navbar>
                {/* <labez */}
            </div>
            <div className='w-11/12 md:w-10/12 mx-auto'>

                <Outlet></Outlet>
            </div>
            <ToastContainer />




        </div>
    );
};

export default RootLayout;
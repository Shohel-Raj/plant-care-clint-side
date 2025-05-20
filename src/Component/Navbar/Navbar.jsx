import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { Tooltip } from 'react-tooltip';
import { AuthContext } from '../../Contexts/AuthContext';
import { Links } from 'react-router';
import { toast } from 'react-toastify';

const Navbar = () => {

    const links = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'}>Home</NavLink> </li>
        <li><NavLink to='/AllPlant' className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'}>All Plants</NavLink> </li>
        <li><NavLink to='/myPlant' className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'}>My Plants</NavLink> </li>
        <li><NavLink to='/addPlant' className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'}>Add Plant</NavLink> </li>
    </>

    const { user, signOutUser } = use(AuthContext)



    const handleLogout = () => {
            signOutUser().then(() => {
                // Sign-out successful.
                toast.warn('LogOut Login for Better Experiance')
    
            }).catch((error) => {
                // An error happened.
                const errorCode=error.code     
                toast.error('Something wrng',errorCode)
            });
        }




    return (
        <>
            <div className="navbar bg-base-100 w-11/12 md:w-10/12 mx-auto pl-0" >
                <div className="navbar-start">

                    <h1 className="btn btn-ghost text-xl uppercase p-0">Plant Care</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="avatar w-8 mr-5 cursor-pointer my-anchor-element">
                        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                            <img src={`${user?`${user?.photoURL}`:'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp'}`} />
                        </div>
                    </div>
                    <Tooltip anchorSelect=".my-anchor-element" place="left" >
                        {
                            user?`${user.displayName}`:'user not Found'
                        }
                    </Tooltip>

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 right-0 w-35 p-2 shadow z-40">
                            {
                                links

                            }
                            {
                                user ? (<button onClick={handleLogout} className="btn ">Logout</button>) : (<Link to='/loginSignInPage' className="btn ">Login</Link>)
                            }

                        </ul>
                    </div>

                    {
                        user ? (<button onClick={handleLogout} className="btn hidden md:flex">Logout</button>) : (<Link to='/loginSignInPage' className="btn hidden md:flex">Login</Link>)
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;
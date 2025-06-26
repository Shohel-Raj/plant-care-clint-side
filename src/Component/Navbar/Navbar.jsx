import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { Tooltip } from 'react-tooltip';
import { AuthContext } from '../../Contexts/AuthContext';
import { Links } from 'react-router';
import { toast } from 'react-toastify';
import img from '../../assets/plant.png'

const Navbar = () => {


    const navigation = useNavigate();


    const handleBTN = () => {
        navigation('/')
    }

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
            const errorCode = error.code
            toast.error('Something wrng', errorCode)
        });
    }




    return (
        <>
            <div className="navbar bg-base-100 dark:bg-white w-11/12 md:w-10/12 mx-auto pl-0" >
                <div className="navbar-start">
                    <div onClick={handleBTN} className="flex items-center p-0 cursor-pointer">
                        <img className="w-10" src={img} alt="Logo" />
                        <h1 className="text-xl hidden md:flex uppercase font-extrabold italic p-0">Plant Care</h1>
                        <h1 className="text-xl md:hidden uppercase font-extrabold italic p-0">P.Care</h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <label className="swap swap-rotate w-8 mr-3">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className="theme-controller" value="dark" />

                        {/* sun icon */}
                        <svg
                            className="swap-off h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-on h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>

                    <div className="avatar w-8 mr-5 cursor-pointer my-anchor-element">
                        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                            <img src={`${user ? `${user?.photoURL}` : 'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp'}`} />
                        </div>
                    </div>
                    <Tooltip anchorSelect=".my-anchor-element" place="left" >
                        {
                            user ? `${user.displayName}` : 'user not Found'
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
                                user ? (<button onClick={handleLogout} className="btn  bg-[#34eb74] text-white hover:bg-[#97f7b9] hover:text-black dark:bg-white">Logout</button>) : (<Link to='/loginSignInPage' className="btn  bg-[#34eb74] text-white hover:bg-[#97f7b9] hover:text-black ">Login</Link>)
                            }

                        </ul>
                    </div>

                    {
                        user ? (<button onClick={handleLogout} className="btn hidden  bg-[#34eb74] text-white hover:bg-[#97f7b9] hover:text-black md:flex">Logout</button>) : (<Link to='/loginSignInPage' className="btn hidden  bg-[#34eb74] text-white hover:bg-[#97f7b9] hover:text-black md:flex">Login</Link>)
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;
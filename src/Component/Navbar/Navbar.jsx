import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { Tooltip } from 'react-tooltip';
import { AuthContext } from '../../Contexts/AuthContext';
import { Links } from 'react-router';
import { toast } from 'react-toastify';
import img from '../../assets/plant.png'
import { FiLogOut } from 'react-icons/fi';
import { MdSpaceDashboard } from 'react-icons/md';

const Navbar = () => {


    const navigation = useNavigate();


    const handleBTN = () => {
        navigation('/')
    }

    const links = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'}>Home</NavLink> </li>
        <li><NavLink to='/AllPlant' className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'}>All Plants</NavLink> </li>
        <li><NavLink to='/blog' className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'}>Blog</NavLink> </li>
        <li><NavLink to='/q&a' className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'}>Asked Question</NavLink> </li>
        <li><NavLink to='/Contact' className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'}>Contact</NavLink> </li>
        <li><NavLink to='/about' className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'}>About Us</NavLink> </li>
        {/* <li><NavLink to='/myPlant' className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'}>My Plants</NavLink> </li>
        <li><NavLink to='/addPlant' className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'}>Add Plant</NavLink> </li> */}
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
            <div className="navbar bg-base-100  w-11/12 md:w-10/12 mx-auto pl-0" >
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


                    {/* <div className="avatar w-8 mr-5 cursor-pointer my-anchor-element">
                        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                            <img src={`${user ? `${user?.photoURL}` : 'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp'}`} />
                        </div>
                    </div>
                    <Tooltip anchorSelect=".my-anchor-element" place="left" >
                        {
                            user ? `${user.displayName}` : 'user not Found'
                        }
                    </Tooltip> */}
                    {
                        user && <Link to='/dashboard' className="btn hidden uppercase rounded-2xl bg-[#34eb74] text-white hover:bg-[#97f7b9] hover:text-black md:flex"> <MdSpaceDashboard />dashboard</Link>
                    }

                    <div className="dropdown">
                        <div className='flex'>
                            <Link to='/dashboard' className="btn md:hidden uppercase rounded-2xl bg-[#34eb74] text-white hover:bg-[#97f7b9] hover:text-black "> <MdSpaceDashboard size={20}/></Link>
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 right-0 w-35 p-2 shadow z-40">
                            {
                                links

                            }

                            {
                                user ? (<>
                                    <button onClick={handleLogout} className="btn  bg-[#34eb74] text-white hover:bg-[#97f7b9] hover:text-black dark:bg-white">Logout</button>

                                </>


                                ) : (<Link to='/loginSignInPage' className="btn  bg-[#34eb74] text-white hover:bg-[#97f7b9] hover:text-black ">Login</Link>)
                            }

                        </ul>
                    </div>

                    {
                        user ? (<button onClick={handleLogout} className="btn hidden rounded-2xl bg-[#34eb74] text-white hover:bg-[#97f7b9] hover:text-black md:flex"><FiLogOut size={20} /></button>) : (<Link to='/loginSignInPage' className="btn hidden  bg-[#34eb74] text-white hover:bg-[#97f7b9] hover:text-black md:flex">Login</Link>)
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;
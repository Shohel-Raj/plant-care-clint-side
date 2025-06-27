import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaInstagram, FaPhoneSquareAlt, FaLinkedin, FaGithub, } from "react-icons/fa";
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import img from '../../assets/plant.png'
import { useNavigate } from 'react-router';

const Footer = () => {


    const navigate = useNavigate();


    const handleBTN = () => {
        navigate('/')
    }


    return (
        <div >
            <footer className="px-4 py-8 w-11/12 md:w-10/12 mx-auto ">


                <div className='flex justify-between gap-3 md:flex-row flex-col'>

                    <div >
                        <div onClick={handleBTN} className="flex items-center p-0 cursor-pointer">
                            <img className="w-10" src={img} alt="Logo" />
                            <h1 className="text-xl flex uppercase font-extrabold italic p-0">Plant Care</h1>
                        </div>
                        <p className='small italic'>Helping You Grow, One Leaf at a Time.</p>
                    </div>
                    <div className='mr-0'>

                        <h1 className='font-bold text-2xl mb-2'>Contact Us</h1>

                        <ul className="flex flex-col space-y-1.5">
                            <li >
                                <a className='hover:text-[#97f7b9] flex gap-2 text-center' ><FaPhoneSquareAlt size={20} className='hover:scale-125' /> <span>01963687341</span></a>
                            </li>
                            <li>
                                <a className='hover:text-[#97f7b9] flex gap-2' ><MdEmail size={20} className='hover:scale-125' /> shohelraj8778@gmail.com </a>
                            </li>
                            <li>
                                <a className='hover:text-[#97f7b9] flex gap-2' ><FaLocationDot size={20} className='hover:scale-125' /> Cox's Bazar,Sadar Bangadesh</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className='font-bold text-2xl mb-2'>Social Contact</p>
                        <ul className="flex flex-wrap space-x-2 sm:space-x-8">

                            <li>
                                <a className='hover:text-[#97f7b9] ' href="https://www.instagram.com/mohammed_shohel_raj/" target='_blank'><FaInstagram size={25} className='hover:scale-125' /></a>
                            </li>
                            <li>
                                <a className='hover:text-[#97f7b9] ' href="https://facebook.com/mohammedshohel.bd" target='_blank' ><FaFacebookSquare size={25} className='hover:scale-125' /> </a>
                            </li>
                            <li>
                                <a className='hover:text-[#97f7b9] ' href="https://linkedin.com/in/mohammedshohel87" target='_blank' ><FaLinkedin size={25} className='hover:scale-125' /></a>
                            </li>
                            <li>
                                <a className='hover:text-[#97f7b9] ' href="https://github.com/Shohel-Raj/" target='_blank' ><FaGithub size={25} className='hover:scale-125' /></a>
                            </li>
                        </ul>
                    </div>
                </div>


            </footer>
        </div>
    );
};

export default Footer;
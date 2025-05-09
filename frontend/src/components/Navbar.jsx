import React, { useState } from 'react';
import { assets } from '../assets/assets';
import profileLogo from '../assets/logo/profile (3).png';
import assets_logo from '../assets/logo/logo11.png';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
            <img onClick={() => navigate('/')} src={assets_logo} alt="" className='w-44 cursor-pointer' />
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to='/'>
                    <li className='py-1 group'>
                        Home
                        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto opacity-0 group-hover:opacity-100 transition-opacity' />
                    </li>
                </NavLink>
                <NavLink to='/doctors'>
                    <li className='py-1 group'>
                        All Doctors
                        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto opacity-0 group-hover:opacity-100 transition-opacity' />
                    </li>
                </NavLink>
                <NavLink to='/about'>
                    <li className='py-1 group'>
                        About
                        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto opacity-0 group-hover:opacity-100 transition-opacity' />
                    </li>
                </NavLink>
                <NavLink to='/blog'>
                    <li className='py-1 group'>
                        Blog
                        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto opacity-0 group-hover:opacity-100 transition-opacity' />
                    </li>
                </NavLink>
                <NavLink to='/contact'>
                    <li className='py-1 group'>
                        Contact
                        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto opacity-0 group-hover:opacity-100 transition-opacity' />
                    </li>
                </NavLink>
                
            </ul>

            <div className='flex items-center gap-3'>
                {
                    token ? (
                        <div className='flex items-center gap-2 cursor-pointer group relative'>
                            <img src={profileLogo} alt="" className='w-8 rounded-full' />
                            <img src={assets.dropdown_icon} className='w-2.5' alt="dropdown" />
                            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                                <div className='min-w-48 bg-stone-50 rounded flex flex-col gap-4 p-4'>
                                    <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                    <p onClick={() => navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                                    <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
                    )
                }

                {/* Mobile Menu Icon */}
                <img className='w-6 md:hidden' onClick={() => setShowMenu(true)} src={assets.menu_icon} alt="menu icon" />

                {/* Mobile Menu */}
                <div className={`${showMenu ? 'fixed inset-0 w-full h-full bg-white opacity-100 transition-all duration-300' : 'h-0 w-0 opacity-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden`}>
                    <div className='flex items-center justify-between px-5 py-6'>
                        <img className='w-36' src={assets_logo} alt="" />
                        <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="close icon" />
                    </div>
                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                        <NavLink onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
                        <NavLink onClick={()=>setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>All Doctors</p></NavLink>
                        <NavLink onClick={()=>setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>About</p></NavLink>
                        <NavLink onClick={()=>setShowMenu(false)} to='/blog'><p className='px-4 py-2 rounded inline-block'>Blog</p></NavLink>
                        <NavLink onClick={()=>setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>Contact</p></NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

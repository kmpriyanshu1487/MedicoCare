import React from 'react'
import { assets } from '../assets/assets'
import assets_logo from '../assets/logo/logo11.png'

const Footer = () => {
    return (
        <div className=' md:mx-10  bg-gray-300'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 p-20 text-sm'>
                <div>
                    <img className='mb-5 w-40' src={assets_logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsum minus laudantium exercitationem, dolores provident esse. Accusantium quia modi hic, libero sequi consectetur doloremque ipsam, .</p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>Get in Touch</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>0123456789</li>
                        <li>kmpriyanshu741@gmail.com</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>Follow Us</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Instagram</li>
                        <li>Facebook</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>Visit Us</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <p>Map</p>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024@ DocCare - All Right Reserved. </p>
            </div>
        </div>
    )
}

export default Footer

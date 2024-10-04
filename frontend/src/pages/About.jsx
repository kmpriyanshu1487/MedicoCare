import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut sunt quo repudiandae a illo adipisci ducimus iusto. Provident odit iure incidunt qui blanditiis atque, pariatur ducimus dolorem sapiente iste alias.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vitae ratione perspiciatis dolorum, voluptatem voluptate quidem praesentium laboriosam. Officiis, quisquam!</p>
          <b>Our Vision</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloribus suscipit repudiandae, hic ad itaque maiores et commodi voluptas rerum!</p>
        </div>
      </div>
      <div className='text-xl my-4 '>
        <p>WHY <span className='text-gray-700 font-semibold ' >CHOOSE US</span></p>

      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'><b>Efficiency:</b><p>Streamlined appointment booking saves time, minimizes wait periods, and ensures a hassle-free experience for both doctors and patients.</p></div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer' ><b>Convenience:</b><p>Online booking offers 24/7 access, easy appointment management, and reduces the need for in-person scheduling, ensuring flexibility.</p></div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer' ><b>Personalization:</b><p>Tailored reminders, patient preferences, and customized scheduling options provide a personalized approach, enhancing the overall user experience.</p></div>


      </div>
    </div>
  )
}

export default About

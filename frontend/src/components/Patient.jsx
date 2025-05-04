import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: 'Rhonda Rhodes',
    role: 'Software Engineer',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    review:
      'Health-E’s integrated services made managing my health straightforward. Their platform exceeded my expectations.',
  },
  {
    name: 'David Lee',
    role: 'Entrepreneur',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    review:
      'Navigating through Health-E was a breeze. The platform offered exceptional access to top-rated doctors.',
  },
  {
    name: 'Joshua Jones',
    role: 'Marketing Specialist',
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
    review:
      'Health-E transformed my healthcare experience with seamless virtual consultations. It saved me so much time!',
  },
  {
    name: 'Samantha Carter',
    role: 'UI Designer',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    review:
      'Impressive virtual support and ease of access. Scheduling appointments has never been this convenient!',
  },
  {
    name: 'Liam Brown',
    role: 'Fitness Coach',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    review:
      'Excellent service! Great for quick consultations when I’m on the go. Highly recommend.',
  },
  {
    name: 'Emily Davis',
    role: 'Teacher',
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
    review:
      'The doctors on this platform are knowledgeable and kind. Helped me get the treatment I needed quickly.',
  },
  {
    name: 'Brian Taylor',
    role: 'Consultant',
    image: 'https://randomuser.me/api/portraits/men/28.jpg',
    review:
      'Reliable platform with user-friendly features. The seamless process really impressed me.',
  },
  {
    name: 'Olivia Smith',
    role: 'HR Manager',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    review:
      'I’ve used it multiple times for my family. Super convenient and trustworthy service.',
  },
  {
    name: 'Daniel Wilson',
    role: 'Photographer',
    image: 'https://randomuser.me/api/portraits/men/38.jpg',
    review:
      'Quick, efficient, and helpful. Felt taken care of throughout the entire process.',
  },
];
const Patient = () => {
  return (
    <div className="bg-white py-16 md:px-12 relative text-gray-800 flex flex-col items-center gap-4">
      <h2 className="text-3xl font-medium text-center">Testimonials</h2>
      <p className="sm:w-1/3 text-center text-sm">
        Hear what our users say about their seamless experience with medicocare
      </p>

      
      <div className="swiper-prev absolute top-1/2 -left-6 transform -translate-y-1/2 z-10 cursor-pointer text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div className="swiper-next absolute top-1/2 -right-6 transform -translate-y-1/2 z-10 cursor-pointer text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{ nextEl: '.swiper-next', prevEl: '.swiper-prev' }}
        slidesPerView={3}
        spaceBetween={30}
        className="pt-5 w-full"
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-white p-6 rounded-lg shadow-md w-[calc(100%-30px)] min-h-[230px] mx-auto">
              <FaQuoteLeft className="absolute top-4 left-4 text-blue-200 text-xl" />
              <FaQuoteRight className="absolute bottom-4 right-4 text-blue-200 text-xl" />
              <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-center items-center">
                <FaStar className="text-yellow-300 text-[100px]" />
              </div>
              <p className="text-gray-700 italic z-10 relative mb-6 text-sm">{`"${review.review}"`}</p>
              <div className="flex items-center space-x-4 relative z-10">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-blue-600">{review.name}</p>
                  <p className="text-gray-500 text-xs">{review.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Patient;

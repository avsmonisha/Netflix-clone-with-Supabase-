import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 bg-[url('/n.jpg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-8 py-6">
        
        {/* Top Nav */}
        <div className='flex items-center justify-between max-w-[1250px] mx-auto'>
          <img src='/n1.png' alt="Logo" className='h-[60px] sm:h-[70px] md:h-[87px]' />
          <div className='flex items-center gap-4'>
            <select className='text-white border border-white rounded-lg bg-black h-8 w-[100px] px-2 text-sm'>
              <option className='text-black bg-white'>English</option>
              <option className='text-black bg-white'>Hindi</option>
            </select>
            <Link
               to="/login" className='bg-red-600 text-white h-8 px-4 pt-1 rounded-sm hover:bg-red-700 text-sm'>
               Sign in
            </Link>
          </div>
        </div>

        {/* Hero Text */}
        <div className='text-center mt-20 sm:mt-32 px-4'>
          <p className='font-bold text-3xl sm:text-5xl md:text-6xl text-white'>Unlimited movies, TV</p>
          <p className='font-bold text-3xl sm:text-5xl md:text-6xl text-white mt-2 sm:mt-3'>shows and more</p>
          <p className='text-white font-semibold text-base sm:text-lg mt-4'>Starts at ₹149. Cancel at any time.</p>
          <p className='text-white text-sm sm:text-base mt-4'>Ready to watch? Enter your email to create or restart your membership.</p>
        </div>

        {/* Email Input and get starded  */}
        <div className='flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 px-2'>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className='w-full sm:w-[400px] h-12 sm:h-14 bg-black/80 border border-gray-100 text-white pl-4 text-base sm:text-lg rounded-sm'
          />


          <Link
            to="/signup"
            className='flex items-center justify-center font-bold w-full sm:w-[250px] h-12 sm:h-14 text-white bg-red-600 text-base sm:text-lg rounded-sm hover:bg-red-700'>
            Get started <IoIosArrowForward className='ml-2 text-xl' />
          </Link>



        </div>

      </div>
    </div>
  );
};

export default Register;

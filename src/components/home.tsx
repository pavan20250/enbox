import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.png';

function Home() {
  return (
    <div className="h-screen w-screen flex flex-col">
      {/* Header Section */}
      <div className="flex justify-between items-center p-8">
        <div className="flex items-center">
          <Image width={80} height={80} src={logo} alt="Logo" />
          <div className='flex flex-col ml-6'>
            <span className="text-xl font-bold text-gray-800">Centre for Smart Manufacturing</span>
            <div className='w-full h-[1px] bg-gray-400 mt-2'/>
          </div>
        </div>
        {/* Navigation Links */}
        <div className='text-lg font-semibold text-gray-700'>
          <nav className="flex space-x-8">
            <Link href="/" className="hover:text-blue-600 transition duration-300">Home</Link>
            <Link href="/about" className="hover:text-blue-600 transition duration-300">About</Link>
            <Link href="/people" className="hover:text-blue-600 transition duration-300">People</Link>
          </nav>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex-1 flex justify-center items-center text-center p-20">
        <div className="max-w-4xl">
          <p className="text-lg font-medium text-gray-600 leading-relaxed">
            Centre for Smart Manufacturing, Precision Machine Tools and Aggregates is focused primarily on development of 
            technologies for Smart Manufacturing and Industry 4.0, High precision machine tools, Aggregates of machine tools, 
            IIoT & artificial Intelligence based solutions to manufacturing industries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

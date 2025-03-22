import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.png';

function Home() {
  return (
    <div className="h-screen w-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Header Section */}
      <header className="flex justify-between items-center px-12 py-0 bg-white shadow-md">
        <div className="flex items-center">
          <Image width={70} height={70} src={logo} alt="Logo" className="hover:scale-105 transition-transform duration-300" />
          <div>
            <span className="text-xl font-semibold text-gray-700">Centre for Smart Manufacturing</span>
          </div>
        </div>
        {/* Navigation Links */}
        <nav className="text-lg font-semibold text-gray-700">
          <ul className="flex space-x-8">
            <li><Link href="/" className="hover:text-blue-600 transition duration-300">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-600 transition duration-300">About</Link></li>
            <li><Link href="/people" className="hover:text-blue-600 transition duration-300">People</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-6 md:px-20">
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed tracking-wide">
            Centre for Smart Manufacturing, Precision Machine Tools and Aggregates is focused on developing 
            cutting-edge technologies for Smart Manufacturing, Industry 4.0, high-precision machine tools, 
            and AI-driven solutions for modern industries.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Home;

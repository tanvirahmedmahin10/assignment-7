import React from 'react';
import FormattedDate from './FormatDate';
import logo from '@/Assests/bazar-hero.png'
import Image from 'next/image';
const Banner = () => {
    return (
       <div className="max-w-7xl mx-auto my-10 pb-20 flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
 
  <div className="flex-1 text-center md:text-left space-y-7">
    <div className="inline-block text-sm text-green-800 dark:text-gray-400 font-medium p-2 rounded-2xl  bg-green-200">
      <FormattedDate />
    </div>

    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white leading-tight">
      আজকের বাজারের দাম এক <br />নজরে
    </h2>

    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed">
      চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
    </p>

    <div className="pt-2">
      <button className="w-full sm:w-auto px-6 py-2.5 bg-green-600 hover:bg-green-700 active:scale-95 text-white font-semibold rounded-lg shadow-md transition-all duration-200">
        সব পণ্য দেখুন
      </button>
    </div>
  </div>

  
  <div className="w-42 sm:w-50 md:w-44 lg:w-102 shrink-0">
    <Image 
      src={logo} 
      alt="Banner Logo"
      width={315}
      height={263}
      className="w-full h-auto object-contain mx-auto"
    />
  </div>
</div>
    );
};

export default Banner;
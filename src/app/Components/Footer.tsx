import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-white border-t border-gray-200 py-4 px-6 text-xs sm:text-sm text-gray-600">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-center sm:text-left font-normal">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>
        <p className="text-center sm:text-right font-normal text-gray-500">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
    );
};

export default Footer;
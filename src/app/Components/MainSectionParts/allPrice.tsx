import React, { Suspense } from 'react';
import AllCards from '../Cards/AllCards';

const AllPrice = () => {
    return (
        <div className="mb-10">
            <h2 className='mx-4 font-semibold text-2xl'>সব পণ্য</h2>
           <Suspense fallback={<nav className="h-16 bg-gray-100" />}> <AllCards></AllCards></Suspense>
        </div>
    );
};

export default AllPrice;
import React, { Suspense } from 'react';
import AllCards from '../Cards/AllCards';
import PageLoading from '@/app/loading';

const AllPrice = () => {
    return (
        <div id='সব-পণ্য' className="mb-10">
            <h2 className='mx-4 font-semibold text-2xl'>সব পণ্য</h2>
           <Suspense fallback={<PageLoading></PageLoading>}> <AllCards></AllCards></Suspense>
        </div>
    );
};

export default AllPrice;
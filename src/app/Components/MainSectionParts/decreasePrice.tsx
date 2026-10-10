import { Triangle } from 'lucide-react';
import React, { Suspense } from 'react';
import DecreaseCard from '../Cards/DecreaseCard';
import PageLoading from '@/app/loading';

const DecreasePrice = () => {
    return (
       <div className="mb-10">
        <div className="mx-2 flex items-center gap-2">
         <Triangle className="w-3.5 h-3.5 rotate-180 fill-green-600 text-green-600"/>   
         <h2 className='font-semibold text-2xl'>আজ দাম কমেছে</h2>
         </div>
         <Suspense fallback={<PageLoading></PageLoading>}>
         <DecreaseCard></DecreaseCard>
         </Suspense>
        
        </div>
    );
};

export default DecreasePrice;
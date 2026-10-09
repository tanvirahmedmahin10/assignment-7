
import CategoryBody from '@/app/Components/CategoryBody/CategoryBody';
import { notFound } from 'next/navigation'

import React from 'react';
export const instant = false
const page = async({ params }: {  params: { catId: string }}) => {
     const { catId } =await params
     const res=await fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${catId}`)
     if (!res.ok) {
    notFound();
  }
     const data=await res.json()
     
     const res2=await fetch(`https://api.abcz.workers.dev/api/bazardor/categories/${catId}`)
      if (!res2.ok) {
    notFound();
  }
     const data2=await res2.json()
    return (
        <div className='max-w-7xl mx-auto'>
            
            <div className='my-6 bg-white p-6 flex gap-3 items-center rounded-2xl'>
                <h2 className='text-4xl'>{data2.icon}</h2>
                <div>
                    <h2 className='font-bold text-2xl'>{data2.nameBn}</h2>
                    <p>{data.length.toLocaleString('bn-BD')} টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                </div>
                </div>
        
            <CategoryBody data={data}></CategoryBody>
        </div>
    );
};

export default page;
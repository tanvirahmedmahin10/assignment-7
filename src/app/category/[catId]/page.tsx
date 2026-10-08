import AllCards from '@/app/Components/Cards/AllCards';
import DifferentCards from '@/app/Components/Cards/DifferentCards';
import { IMarq } from '@/app/Components/MarqueeNav';
import { ca } from 'date-fns/locale';
import React from 'react';
export const instant = false
const page = async({ params }: {  params: { catId: string }}) => {
     const { catId } =await params
     const res=await fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${catId}`)
     const data=await res.json()
     
     const res2=await fetch(`https://api.abcz.workers.dev/api/bazardor/categories/${catId}`)
     const data2=await res2.json()
     console.log(data2);
    return (
        <div className='max-w-7xl mx-auto'>
            
            <div className='my-6 bg-white p-6 flex gap-3 items-center rounded-2xl'>
                <h2 className='text-4xl'>{data2.icon}</h2>
                <div>
                    <h2 className='font-bold text-2xl'>{data2.nameBn}</h2>
                    <p>{data.length.toLocaleString('bn-BD')} টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                </div>
                </div>
        
            <div>মোট {data.length.toLocaleString('bn-BD')} পণ্য দেখানো হচ্ছে</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
            {
                data.map((cat:IMarq)=><DifferentCards key={cat.id} cat={cat}></DifferentCards>)
            }
        </div>
        </div>
    );
};

export default page;
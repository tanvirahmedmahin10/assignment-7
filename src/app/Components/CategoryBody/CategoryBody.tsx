'use client'
import React, { useState } from 'react';
import { IMarq } from '../MarqueeNav';
import Link from 'next/link';
import DifferentCards from '../Cards/DifferentCards';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CategoryBody = ({data}:{data:IMarq[]}) => {
      const [isOpen, setIsOpen] = useState(false);
     
    const [isSort,setIsSort]=useState<'ডিফল্ট' | 'দাম: কম থেকে বেশি' | 'দাম: বেশি থেকে কম'>('ডিফল্ট')
    const sorted=(sortData:IMarq[])=>{
            const sortinfo=[...sortData]
            if(isSort ==='দাম: কম থেকে বেশি'){
         sortinfo.sort((a,b)=>a.today-b.today)
         }
         else if(isSort ==='দাম: বেশি থেকে কম'){
           sortinfo.sort((a,b)=>b.today-a.today) 
         }
         return sortinfo
           }
           const perfectlySorted=sorted(data)
    return (
        <div>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2'>
             <div>মোট {data.length.toLocaleString('bn-BD')} পণ্য দেখানো হচ্ছে</div>
               <div className='flex items-center'>সাজান
      <div className="mx-4 relative flex items-center">
    <select
      value={isSort}
      onChange={(e) => setIsSort(e.target.value as 'ডিফল্ট' | 'দাম: কম থেকে বেশি' | 'দাম: বেশি থেকে কম')}
      onFocus={() => setIsOpen(true)}
    onBlur={() => setIsOpen(false)}
      className="pt-2 select w-fit bg-none pr-8 cursor-pointer flex items-center"
    >
      <option value={'ডিফল্ট'}>ডিফল্ট</option>
      <option value={'দাম: কম থেকে বেশি'}>দাম: কম থেকে বেশি</option>
      <option value={'দাম: বেশি থেকে কম'}>দাম: বেশি থেকে কম</option>
    </select>
    {isOpen ? (
    <ChevronUp className="w-4 h-4 absolute right-2.5 pointer-events-none" />
  ) : (
    <ChevronDown className="w-4 h-4 absolute right-2.5 pointer-events-none" />
  )}
  </div>
  </div>
</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
            {
                perfectlySorted.map((cat:IMarq)=><Link href={`/products/${cat.id}`} key={cat.id}><DifferentCards cat={cat}></DifferentCards></Link>)
            }
        </div>
        
        </div>
    );
};

export default CategoryBody;
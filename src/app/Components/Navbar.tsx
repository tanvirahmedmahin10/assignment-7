
import Image from 'next/image';
interface ICat{
      id: string
  slug: string
  nameBn: string
  icon: string
}

import logo from '@/Assests/logo-icon.png'
import Link from 'next/link';
import MarqueeNav from './MarqueeNav';
import FormattedDate from './FormatDate';


const Navbar =async() => {

    const res=await fetch('https://api.abcz.workers.dev/api/bazardor/categories')
    const data=await res.json()
//     const datenow = new Date().toLocaleDateString("bn-BD", {
//     dateStyle: "full",
//   });
    return (
       <div className="bg-white">
    <div className="my-3 max-w-7xl mx-auto flex justify-between">
       

           
            <div className="flex items-center gap-2">
                <div className="w-[60px] h-[60px] bg-green-600 rounded-2xl flex items-center justify-center">
                    <Image
                        src={logo}
                        alt="logo-icon"
                        width={30}
                        height={30}
                    />
                </div>

                <div>
                    <h2 className="text-2xl font-bold">বাজার দর</h2>
                    <FormattedDate></FormattedDate>
                    
                </div>
            </div>

            <div className="ml-auto flex items-center gap-3">
                <button className="rounded py-2 px-4 text-black">সাইন ইন</button>
                
                <button className="bg-green-700 rounded py-2 px-4 text-white">সাইন আপ</button>
            </div>

        
    </div>
    <div className='border border-gray-100'>
    <div className="max-w-7xl  mx-auto flex items-center gap-3 overflow-x-auto lg:flex-wrap py-2 scrollbar">
  {data.map((cat: ICat) => (
    <Link
      href={cat.slug}
      key={cat.id}
      className="flex items-center gap-2 px-4 py-2 rounded-full  hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-sm font-medium whitespace-nowrap shrink-0 transition-colors"
    >
      <span>{cat.icon}</span>
      <span>{cat.nameBn}</span>
    </Link>
  ))}
</div>
</div>
<div className='border border-gray-100 p-3'><MarqueeNav></MarqueeNav></div>
     
</div>
    );
};

export default Navbar;
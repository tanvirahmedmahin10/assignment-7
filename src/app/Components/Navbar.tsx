
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


const Navbar =async() => {

    const res=await fetch('https://api.abcz.workers.dev/api/bazardor/categories')
    const data=await res.json()
    const datenow = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
    return (
       <div className="my-3">
    <div className="max-w-7xl mx-auto flex justify-between">
       

           
            <div className="flex items-center gap-2">
                <div className="w-[60px] h-[60px] bg-green-700 rounded-2xl flex items-center justify-center">
                    <Image
                        src={logo}
                        alt="logo-icon"
                        width={30}
                        height={30}
                    />
                </div>

                <div>
                    <h2 className="text-2xl font-bold">বাজার দর</h2>
                    <h2>{datenow}</h2>
                    
                </div>
            </div>

            <div className="ml-auto flex items-center gap-3">
                <button className="btn btn-soft">সাইন ইন</button>
                
                <button className="btn btn-success">সাইন আপ</button>
            </div>

        
    </div>
    <div className='bg-gray-50'>
    <div className="my-6 max-w-7xl  mx-auto flex items-center gap-3 overflow-x-auto lg:flex-wrap py-2 scrollbar">
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
<div className='bg-gray-50 p-2'><MarqueeNav></MarqueeNav></div>
     
</div>
    );
};

export default Navbar;
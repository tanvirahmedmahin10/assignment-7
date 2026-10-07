
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
    const datenow=new Date().toLocaleString("bn-BD",{
        dateStyle:"full"
    })
    const res=await fetch('https://api.abcz.workers.dev/api/bazardor/categories')
    const data=await res.json()
    
    return (
       <div className="my-3">
    <div className="container mx-auto flex justify-between">
       

           
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
                    <h3>{datenow}</h3>
                </div>
            </div>

            <div className="ml-auto flex items-center gap-3">
                <button className="btn btn-soft">সাইন ইন</button>
                
                <button className="btn btn-success">সাইন আপ</button>
            </div>

        
    </div>
    <div className='my-6 container mx-auto flex gap-6'>
        {
           data.map((cat:ICat)=><Link href={cat.slug} key={cat.id}>
            {cat.icon} {cat.nameBn}
           </Link>)
        }
    </div>
     <MarqueeNav></MarqueeNav>
</div>
    );
};

export default Navbar;